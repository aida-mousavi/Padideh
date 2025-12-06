import { useMemo } from "react";

export default function useShamsiDate(dateInput) {
  const shamsi = useMemo(() => {
    if (!dateInput) return "";

    const solarDate = new Date(dateInput);

    const formatter = new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "long",
    });

    return formatter.format(solarDate); // مثل "آذر ۱۴۰۴"
  }, [dateInput]);

  return shamsi;
}
