/**
 * i18n configuration
 *
 * This configuration ensures that if a translation key is missing in the current locale,
 * the application falls back to the default locale (English in this case).
 * This prevents the user from seeing raw translation keys or empty strings.
 */
export default defineI18nConfig(() => {
  return {
    fallbackLocale: "en",
  }
})
