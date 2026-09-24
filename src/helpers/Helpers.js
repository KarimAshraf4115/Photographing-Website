export function formatDate(data) {
  const date = new Date(data.date);
  const formatter = new Intl.DateTimeFormat("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formatter.format(date);
}