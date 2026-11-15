import type { Locale } from "./i18n-config";

const USD_TO_EGP = 50;

export function formatPrice(
  amount: number,
  locale: Locale,
  options: { from?: boolean } = {}
): string {
  const { from = true } = options;
  if (locale === "ar") {
    const egp = amount * USD_TO_EGP;
    const formatted = egp.toLocaleString("ar-EG");
    return from ? `ابتداءً من ${formatted} ج.م` : `${formatted} ج.م`;
  }
  return from ? `from $${amount.toLocaleString("en-US")}` : `$${amount.toLocaleString("en-US")}`;
}

export function formatRateNote(locale: Locale): string {
  if (locale === "ar") {
    return "* الأسعار بالدولار الأمريكي محسوبة بسعر تقريبي 50 جنيه للدولار.";
  }
  return "* Pricing shown in USD. Approximate EGP equivalent available in Arabic view.";
}
