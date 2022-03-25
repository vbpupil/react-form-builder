import English from "./locales/en-us.json"
import Polish from "./locales/pl-pl.json"

export const Locale:ReadonlyArray<string> = navigator.languages;

export let Language:object;

switch (Locale.toString()) {
    case 'pl-pl':
        Language = Polish;
        break
    default:
        Language = English;
}

// Language = Polish;
