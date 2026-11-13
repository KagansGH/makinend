/**
 * Bakım / yapım aşaması perdesi.
 * true: ziyaretçi yalnızca bakım ekranını görür; asıl sayfalar yerinde kalır.
 * Siteyi herkese açmak için false yapıp deploy edin.
 *
 * Önizleme: /main adresine gidince cookie set edilir, o tarayıcıda site açılır.
 */
export const maintenanceMode = true;

/** Gizli önizleme yolu — makinend.com/main */
export const previewPath = "/main";

export const previewCookie = "makinend_preview";
