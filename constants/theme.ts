import { Platform } from "react-native";

export const Colors = {
  primary: {
    gradientFrom: "#9333EA",
    gradientTo: "#DB2777",
  },
  background: {
    base: "#000000",
    elevated: "#111827",
    card: "#1F2937",
    secondary: "#030712",
    border: "#374151",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#9CA3AF",
    accent: "#A855F7",
  },
  accent: {
    star: "#FACC15",
    success: "#10B981",
    error: "#EF4444",
  },
} as const;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
