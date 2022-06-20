import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#4285F4", //primary.40
      0: "#010A18",
      10: "#041E48",
      20: "#083D91",
      30: "#0D5BD9",
      40: "#4285F4",
      50: "#5693F5",
      60: "#6EA3F7",
      70: "#87B2F8",
      80: "#B7D1FB",
      90: "#CFE0FC",
      95: "#CFE0FC",
      99: "#F5F9FE",
      100: "#FFFFFF",
      store: "#FF4500",

      contrastText: "#fff",
    },
    store: {
      main: "#FF4500",

      contrastText: "#fff",
    },
    secondary: {
      main: "#FFFFFF",
      0: "#000000",
      10: "#1C1B1F",
      20: "#313033",
      30: "#484649",
      40: "#605D62",
      50: "#787579",
      60: "#939094",
      70: "#AEAAAE",
      80: "#C9C5CA",
      90: "#E6E1E5",
      95: "#F4EFF4",
      99: "#FFFBFE",
      100: "#FFFFFF",

      contrastText: "#FFF",
    },
  },
  typography: {
    headline: {
      fontWeight: 700,
      fontSize: "42px",
      lineHeight: "42px",
      letterSpacing: -1,

      "@media (min-width:600px)": {
        fontSize: "64px",
        lineHeight: "64px",
      },
    },
    h1: {
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "36px",
      letterSpacing: 0,

      "@media (min-width:600px)": {
        fontSize: "36px",
        lineHeight: "44px",
      },
    },
    h2: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: 0.1,

      "@media (min-width:600px)": {
        fontSize: "28px",
        lineHeight: "36px",
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: "22px",
      lineHeight: "22px",
      letterSpacing: 0,

      "@media (min-width:600px)": {
        fontSize: "22px",
        lineHeight: "18px",
      },
    },
    menu: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: 0.25,

      "@media (min-width:600px)": {
        fontSize: "20px",
        lineHeight: "24px",
        letterSpacing: 0.15,
      },
    },
    subtitle: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: 0.15,

      "@media (min-width:600px)": {
        fontSize: "24px",
        lineHeight: "32px",
        letterSpacing: 0,
      },
    },
    underline1: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: 0.4,

      "@media (min-width:600px)": {
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: 0.1,
      },
    },
    underline2: {
      fontWeight: 400,
      fontSize: "11px",
      lineHeight: "16px",
      letterSpacing: 0.5,

      "@media (min-width:600px)": {
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: 0.4,
      },
    },
    overline: {
      fontWeight: 400,
      fontSize: "11px",
      lineHeight: "16px",
      letterSpacing: 0.5,

      "@media (min-width:600px)": {
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: 0.4,
      },
    },
    button: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: 0.1,

      "@media (min-width:600px)": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: 0.5,
      },
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: 0.5,

      "@media (min-width:600px)": {
        fontSize: "20px",
        lineHeight: "24px",
        letterSpacing: 0.15,
      },
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: 0.1,

      "@media (min-width:600px)": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: 0.5,
      },
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "primary",
        variant: "contained",
      },
      styleOverrides: {
        root: {
          height: "40px",
          borderRadius: "18px",
          paddingRight: "24px",
          paddingLeft: "24px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "18px",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#B7D1FB", //primary.40
      100: "#010A18",
      99: "#041E48",
      95: "#083D91",
      90: "#0D5BD9",
      80: "#4285F4",
      70: "#5693F5",
      60: "#6EA3F7",
      50: "#87B2F8",
      40: "#B7D1FB",
      30: "#CFE0FC",
      20: "#CFE0FC",
      10: "#F5F9FE",
      0: "#FFFFFF",
      store: "#FFCCB9",

      contrastText: "#010A18",
    },
    store: {
      main: "#FFCCB9",

      contrastText: "#000",
    },
    secondary: {
      main: "#FFFFFF",
      100: "#000000",
      99: "#1C1B1F",
      95: "#313033",
      90: "#484649",
      80: "#605D62",
      70: "#787579",
      60: "#939094",
      50: "#AEAAAE",
      40: "#C9C5CA",
      30: "#E6E1E5",
      20: "#F4EFF4",
      10: "#FFFBFE",
      0: "#FFFFFF",

      contrastText: "#1C1B1F",
    },
  },
  typography: {
    headline: {
      fontWeight: 700,
      fontSize: "42px",
      lineHeight: "42px",
      letterSpacing: -1,

      "@media (min-width:600px)": {
        fontSize: "64px",
        lineHeight: "64px",
      },
    },
    h1: {
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "36px",
      letterSpacing: 0,

      "@media (min-width:600px)": {
        fontSize: "36px",
        lineHeight: "44px",
      },
    },
    h2: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: 0.1,

      "@media (min-width:600px)": {
        fontSize: "28px",
        lineHeight: "36px",
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: "22px",
      lineHeight: "28px",
      letterSpacing: 0,

      "@media (min-width:600px)": {
        fontSize: "22px",
        lineHeight: "28px",
      },
    },
    menu: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: 0.25,

      "@media (min-width:600px)": {
        fontSize: "20px",
        lineHeight: "24px",
        letterSpacing: 0.15,
      },
    },
    subtitle: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: 0.15,

      "@media (min-width:600px)": {
        fontSize: "24px",
        lineHeight: "32px",
        letterSpacing: 0,
      },
    },
    underline1: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: 0.4,

      "@media (min-width:600px)": {
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: 0.1,
      },
    },
    underline2: {
      fontWeight: 400,
      fontSize: "11px",
      lineHeight: "16px",
      letterSpacing: 0.5,

      "@media (min-width:600px)": {
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: 0.4,
      },
    },
    overline: {
      fontWeight: 400,
      fontSize: "11px",
      lineHeight: "16px",
      letterSpacing: 0.5,

      "@media (min-width:600px)": {
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: 0.4,
      },
    },
    button: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: 0.1,

      "@media (min-width:600px)": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: 0.5,
      },
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: 0.5,

      "@media (min-width:600px)": {
        fontSize: "20px",
        lineHeight: "24px",
        letterSpacing: 0.15,
      },
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: 0.1,

      "@media (min-width:600px)": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: 0.5,
      },
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "primary",
        variant: "contained",
      },
      styleOverrides: {
        root: {
          height: "40px",
          borderRadius: "18px",
          paddingRight: "24px",
          paddingLeft: "24px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "18px",
        },
      },
    },
  },
});
