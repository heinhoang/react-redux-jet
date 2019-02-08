export function getLocale(defaultLocale = 'en') {
    const language = (navigator.languages && navigator.languages[0]) || navigator.language;
    const locale = language.toLowerCase().split(/[_-]+/)[0];
    return locale;
}
