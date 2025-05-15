import { format, parseISO } from 'date-fns';

export function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'MMM d, yyyy');
}

export function formatDateWithTime(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'MMM d, yyyy • h:mm a');
}

export function formatDateForSEO(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'yyyy-MM-dd');
}