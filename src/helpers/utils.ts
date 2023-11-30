const convertDate = (date: string | Date | undefined) => {
  if (!date) return;
  const options = { month: 'long', year: 'numeric' } as const;
  return new Date(date).toLocaleString(undefined, options);
};

const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL ?? process.env.NEXT_PUBLIC_BASE_URL;

export { convertDate, getBaseUrl };
