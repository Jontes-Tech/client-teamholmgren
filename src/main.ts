import "./app.css";
import App from "./App.svelte";
import {
  addMessages,
  init,
  locale,
} from "svelte-i18n";
import en from "./translations/en.json";
import se from "./translations/se.json";

addMessages("en", en);
addMessages("se", se);

locale.subscribe((lng) => {
  if (lng) localStorage.setItem("svelte-i18n-locale", lng);
});

const fallbackLocale = "se";
const initialLocale = localStorage.getItem("svelte-i18n-locale") || "se"; // the locale could be region specific, i.e. de-CH

init({
  fallbackLocale,
  initialLocale,
});

const app = new App({
  target: document.body,
  props: {},
});

export default app;
