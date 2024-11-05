export const theme = {
  COLORS: {
    WHITE: "#FFFFFF",

    GRAY1: "#1B1D1E",
    GRAY2: "#333638",
    GRAY3: "#5C6265",
    GRAY4: "#B9BBBC",
    GRAY5: "#DDDEDF",
    GRAY6: "#EFF0F0",
    GRAY7: "#FAFAFA",

    RED_DARK: "#BF3B44",
    RED_MID: "#F3BABD",
    RED_LIGHT: "#F4E6E7",

    GREEN_DARK: "#639339",
    GREEN_MID: "#CBE4B4",
    GREEN_LIGHT: "#E5F0DB",

    BRAND_LIGHT: "#00B37E",
    BRAND_MID: "#00875F",
    WARNING_LIGHT: "#FBA94C",
    DANGER_LIGHT: "#F75A68",
  },
  FONTS: {
    REGULAR: "Nunito_400Regular",
    BOLD: "Nunito_700Bold",
  },
  SIZES: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
    xxl: "32px",
  },
};

export type ThemeType = typeof theme;
