export const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: "numeric",
  month: "long",
  day: "numeric"
});

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
