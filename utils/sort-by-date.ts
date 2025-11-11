export const sortByDate = <T extends Record<string, unknown>>({
  data,
  key,
}: {
  data: T[];
  key: keyof T;
}): T[] => {
  if (!data || !key) return [];
  return data.sort((a, b) => {
    const aDate = new Date(a[key] as string | number | Date);
    const bDate = new Date(b[key] as string | number | Date);
    return bDate.getTime() - aDate.getTime();
  });
};
