export const brandColors = {
  primary: {
    light: '#D9453C',
    main: '#D9453C',
    dark: '#000000',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#D9453C',
    main: '#D9453C',
    dark: '#FF6F00',
    contrastText: '#FFFFFF',
  },
};

export const neutralColors = {
  white: '#FFFFFF',
  black: '#000000',
  surfaceDark: '#303030',
  notification: '#424242',
  borderDark: '#000000',
  iconMuted: '#cccccc',
  textMuted: 'rgba(0, 0, 0, 0.54)',
  lightBorder: 'rgba(0, 0, 0, 0.2)',
  darkBorder: 'rgba(255, 255, 255, 0.2)',
  hoverLight: 'rgba(128,128,128, 0.05)',
  hoverDark: 'rgba(128,128,128, 0.9)',
};

export const socialColors = {
  twitter: '#28aae1',
  facebook: '#3b579d',
  google: '#dd493c',
};

export const semanticColors = {
  warning: '#FFC107',
};

export const shadowTokens = {
  soft: '0 0 13px -1px rgba(0, 0, 0, 0.22)',
  image: '0 0px 18px 0 rgba(0, 0, 0, 0.17)',
  paperLight: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
  paperLightStrong: '0 1.5px 12px 4px rgba(0, 0, 0, 0.12)',
  paperDark: '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)',
  paperDarkStrong: '0px 2px 4px -1px rgba(64, 64, 64, 0.46), 0px 4px 5px 0px rgba(42, 42, 42, 0.32), 0px 1px 10px 0px rgba(20, 20, 20, 0.12)',
  formLight: '0 0 12px 2px rgba(0, 0, 0, 0.05)',
  formDark: '0 1.5px 12px 2px rgba(0, 0, 0, 0.28)',
  overlay: 'rgba(0, 0, 0, 0.32)',
  titleOnDark: 'rgba(255, 255, 255, 0.5)',
};

export const designTokens = {
  brand: brandColors,
  neutral: neutralColors,
  semantic: semanticColors,
  social: socialColors,
  shadow: shadowTokens,
};

export default designTokens;
