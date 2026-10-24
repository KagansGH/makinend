/**
 * Proje referansları. Projeler bir ürün kategorisi değildir; bağımsız
 * /projeler route'u altında listelenir.
 *
 * Gerçek referanslar eklenene kadar liste boş kalır ve /projeler sayfası
 * boş durum metnini gösterir.
 */

export interface Project {
	slug: string;
	title: string;
	summary: string;
	/** Örn. "Taşıma Sistemleri", "Roll Form". Kart üzerinde etiket olarak görünür. */
	field?: string;
	location?: string;
	year?: string;
	image?: string;
}

export const projects: Project[] = [];
