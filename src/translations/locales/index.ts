import { Locale, Translations } from "../types";
import en from "./en";
import fr from "./fr";
import es from './es';

const locales: Record<Locale, Translations> = {
  fr,
  en,
  es
};

export default locales;
