import { CURRENCY, CURRENCY_SYMBOL } from "@/constants";

type FormatCurrencyOptions = {
  locale?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  amount: number;
};

export const formatCurrency = ({
  amount,
  locale = "en-US",
  currency = CURRENCY,
  minimumFractionDigits = 0,
  maximumFractionDigits = 2,
}: FormatCurrencyOptions): string => {
  let formatAmount = Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
    compactDisplay: "short",
  }).format(amount);

  // Replace NGN with custom symbol if needed
  if (formatAmount.includes("NGN")) {
    formatAmount = formatAmount.replace("NGN", CURRENCY_SYMBOL);
  }

  return formatAmount;
};
