export const site = {
	name: "Makinend",
	logo: "/logo.png",
	tagline: "İhtiyaçtan tasarıma, tasarımdan çalışan sisteme.",
	contact: {
		email: "info@makinend.com",
		phone: "+90 531 232 5423",
		phoneHref: "tel:+905312325423",
		addressLines: [
			"Hacı Halil Mah. 1207 Sok. No:1/5 Match Office",
			"Gebze, Kocaeli",
		],
	},
	languages: [
		{ code: "tr", label: "TR" },
		{ code: "en", label: "EN" },
	],
} as const;

/**
 * Header ana menüsü. "Ürünler" bir sayfa değil; ürün ağacını açan
 * mega menüdür, bu yüzden href taşımaz.
 */
export const mainNav = [
	{ label: "Ana Sayfa", href: "/" },
	{ label: "Ürünler", href: null },
	{ label: "Projeler", href: "/projeler" },
	{ label: "Hakkımızda", href: "/hakkimizda" },
	{ label: "İletişim", href: "/iletisim" },
] as const;
