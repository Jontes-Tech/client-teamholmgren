import "./app.css";
import App from "./App.svelte";
import { addMessages, init, getLocaleFromPathname, getLocaleFromNavigator, locale } from "svelte-i18n";
import en from "./translations/en.json"
import se from "./translations/se.json"

addMessages("en", en);
addMessages("se", se);

const fallbackLocale = 'se';
const lngs = [fallbackLocale, 'en'];

locale.subscribe((lng) => {
  if (lng) localStorage.setItem('svelte-i18n-locale', lng);
});

let initialLocale;
const detectedLocale = localStorage.getItem('svelte-i18n-locale') || getLocaleFromNavigator(); // the locale could be region specific, i.e. de-CH
if (lngs.indexOf(detectedLocale) > -1) initialLocale = detectedLocale;
if (!initialLocale && detectedLocale.indexOf('-') > 0) {
  const foundLng = lngs.find((l) => detectedLocale.indexOf(l + '-') === 0);
  if (foundLng) initialLocale = foundLng;
}
if (!initialLocale) initialLocale = fallbackLocale;

init({
  initialLocale: getLocaleFromPathname(/^\/(.*?)\//),
  fallbackLocale: "se",
});

const app = new App({
  target: document.getElementById("app"),
});

export default app;
