export function normalizeSummary(
  summary: string | string[] | undefined,
): string[] {
  if (!summary) return [];
  return Array.isArray(summary) ? summary : [summary];
}
