import PublicSans from "../assets/fonts/PublicSans/PublicSans-Bold.ttf";
import { createTheme } from "@mui/material";

const publicSans = {
  fontFamily: "Public Sans",
  fontStyle: "bold",
  fontDisplay: "swap",
  fontWeight: "700",
  src: `
      local('PublicSans'),
      local('PublicSans-Bold'),
      url(${PublicSans}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createTheme({
  typography: {
    fontFamily: ["PublicSans", 'sans-serif' ].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [publicSans],
      },
    },
  },
  palette: {
    primary: {
      main: '#7367F0',
      contrastText: '#fff',
    },
    secondary: {
        main: '#2F3349',
        contrastText: 'rgba(228, 230, 244,0.68)',
      },
    success: {
        main: 'rgb(40,199,111)',
      },
      mainText: {
        main: '#33303cad'
      },
      subtitle: {
        main: 'e4e6f461'
      },
      textColor: {
        main: 'rgba(51,48,60,.68)'
      },
      logoColor: {
        main: '#e4e6f4de'
      }
  },
  // action: {
  //   selected: '#e4e6f4de',


  // }
});

export default theme;