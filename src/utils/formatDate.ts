export const formatDate = (date: string, locale: string = 'en-US') => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const

	console.log({date})
	
  const now = new Date(date).toLocaleDateString(locale, options)

  return now
}