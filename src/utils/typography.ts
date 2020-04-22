import Typography from 'typography';

// const typography = new Typography({
//   baseFontSize: '18px',
//   baseLineHeight: 1.666,
//   headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
//   bodyFontFamily: ['Georgia', 'serif'],
// });

import kirkhamTheme from 'typography-theme-kirkham';
const theme = { ...kirkhamTheme, headerColor: 'white' };
console.log('theme', theme);

const typography = new Typography(theme);

export default typography;
