import deApp from "./locales/de/app.de.json";
import deBlog from "./locales/de/blog.de.json";
import deHome from "./locales/de/home.de.json";
import deProjects from "./locales/de/projects.de.json";
import enApp from "./locales/en/app.en.json";
import enBlog from "./locales/en/blog.en.json";
import enHome from "./locales/en/home.en.json";
import enProjects from "./locales/en/projects.en.json";

const de = {
  ...deApp,
  home: deHome,
  projects: deProjects,
  blog: deBlog,
};

export type Translation = typeof de;

// Typed against German, so a missing English key fails the build.
const en: Translation = {
  ...enApp,
  home: enHome,
  projects: enProjects,
  blog: enBlog,
};

export const translations = { de, en };

export type Language = keyof typeof translations;
