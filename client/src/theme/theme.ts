export const theme = {
  colors: {
    primary: '#4B367C',
    error: '#E21212',
    text: "#333",
    greyLight: "#D3D3D3",
    black: "#000",
  },
  breakpoints: ['40em', '76em'],
  fontSizes: ["1.2rem", "1.4rem", "1.6rem", "2rem", "2.4rem", "3.2rem"],
  space: [0, "0.4rem", "0.8rem", "1.6rem", "3.2rem"],
};

export type Theme = typeof theme;