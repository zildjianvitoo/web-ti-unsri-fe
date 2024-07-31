import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

// Function to convert the date
export default function formatDateTimeID(
  isoDateString: string | null | undefined,
): string {
  if (!isoDateString) return "-";

  // Parse the ISO date string
  const date = parseISO(isoDateString);

  // Format the date to the desired format
  const formattedDate = format(date, "d MMMM yyyy, H:mm", { locale: id });

  return formattedDate + " WIB";
} // Output: 20 Juli 2024, 21:45 WIB
