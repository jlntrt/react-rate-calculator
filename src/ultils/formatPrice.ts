function formatPrice(value: number = 0, currency: string = "EUR", country: string = "de-DE"): string {
  return new Intl.NumberFormat(
    country, { 
      style: 'currency', 
      currency: currency 
    }
  ).format(value)
}

export default formatPrice