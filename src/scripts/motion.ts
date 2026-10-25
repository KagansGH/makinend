/**
 * Site geneli hareketler: görünür olunca açılma, sayaç, parallax,
 * sticky çözüm sahnesi ve süreç çizgisi. Hepsi `prefers-reduced-motion`
 * açıkken son haline atlanır.
 */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initReveal() {
	const items = document.querySelectorAll<HTMLElement>("[data-reveal]");

	if (reduceMotion || !("IntersectionObserver" in window)) {
		items.forEach((item) => item.classList.add("is-visible"));
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			}
		},
		{ rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
	);

	items.forEach((item) => observer.observe(item));
}

function formatCount(value: number, decimals: number): string {
	return value.toLocaleString("tr-TR", {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals,
	});
}

function initCounters() {
	const counters = document.querySelectorAll<HTMLElement>("[data-count]");

	const run = (el: HTMLElement) => {
		const target = Number(el.dataset.count);
		const decimals = Number(el.dataset.countDecimals ?? 0);

		if (reduceMotion) {
			el.textContent = formatCount(target, decimals);
			return;
		}

		const duration = 1800;
		const start = performance.now();

		const tick = (now: number) => {
			const t = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - t, 4);
			el.textContent = formatCount(target * eased, decimals);
			if (t < 1) requestAnimationFrame(tick);
		};

		requestAnimationFrame(tick);
	};

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				run(entry.target as HTMLElement);
				observer.unobserve(entry.target);
			}
		},
		{ threshold: 0.6 },
	);

	counters.forEach((counter) => observer.observe(counter));
}

/** `data-parallax="0.12"`: öğe, görünür alan merkezine uzaklığıyla orantılı kayar. */
function initParallax() {
	if (reduceMotion) return;

	const items = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
	if (!items.length) return;

	let ticking = false;

	const update = () => {
		const vh = window.innerHeight;

		for (const item of items) {
			const host = item.parentElement ?? item;
			const rect = host.getBoundingClientRect();
			if (rect.bottom < -200 || rect.top > vh + 200) continue;

			const speed = Number(item.dataset.parallax);
			const offset = (rect.top + rect.height / 2 - vh / 2) * speed;
			item.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
		}

		ticking = false;
	};

	const request = () => {
		if (ticking) return;
		ticking = true;
		requestAnimationFrame(update);
	};

	update();
	window.addEventListener("scroll", request, { passive: true });
	window.addEventListener("resize", request);
}

/** Sticky çözüm sahnesi: görünür alanın ortasındaki madde aktif render'ı belirler. */
function initShowcase() {
	const root = document.querySelector<HTMLElement>("[data-showcase]");
	if (!root) return;

	const steps = [...root.querySelectorAll<HTMLElement>("[data-showcase-step]")];
	const frames = [...root.querySelectorAll<HTMLElement>("[data-showcase-frame]")];
	const index = root.querySelector<HTMLElement>("[data-showcase-index]");
	const label = root.querySelector<HTMLElement>("[data-showcase-label]");

	const activate = (i: number) => {
		steps.forEach((step, n) => step.classList.toggle("is-active", n === i));
		frames.forEach((frame, n) => frame.classList.toggle("is-active", n === i));
		if (index) index.textContent = String(i + 1).padStart(2, "0");
		if (label) label.textContent = steps[i]?.dataset.showcaseStep ?? "";
	};

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				activate(steps.indexOf(entry.target as HTMLElement));
			}
		},
		{ rootMargin: "-45% 0px -45% 0px" },
	);

	steps.forEach((step) => observer.observe(step));
	activate(0);
}

/** Süreç çizgisi bölüm kaydıkça soldan sağa dolar. */
function initProgressLine() {
	const root = document.querySelector<HTMLElement>("[data-progress-line]");
	if (!root) return;

	if (reduceMotion) {
		root.style.setProperty("--progress", "1");
		return;
	}

	let ticking = false;

	const update = () => {
		const rect = root.getBoundingClientRect();
		const vh = window.innerHeight;
		const raw = (vh * 0.85 - rect.top) / (rect.height + vh * 0.35);
		root.style.setProperty("--progress", Math.min(Math.max(raw, 0), 1).toFixed(3));
		ticking = false;
	};

	window.addEventListener(
		"scroll",
		() => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(update);
		},
		{ passive: true },
	);
	update();
}

initReveal();
initCounters();
initParallax();
initShowcase();
initProgressLine();
