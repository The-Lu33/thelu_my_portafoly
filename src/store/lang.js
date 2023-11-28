import { writable } from 'svelte/store';

export const language = writable('en'); // Inicia con el idioma predeterminado, por ejemplo, español

export const setLanguage = (lang) => {
  language.set(lang);
};