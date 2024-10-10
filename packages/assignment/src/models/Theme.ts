/**
 * ! Union Types
 */
export const Theme_e = {
  light: "light",
  dark: "dark",
} as const;
export type Theme_e = (typeof Theme_e)[keyof typeof Theme_e];
