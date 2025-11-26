import type React from "react";
import type { ViewStyle } from "react-native";

export interface ScreenLayoutProps {
  children: React.ReactNode;
  style?: ViewStyle;
  scrollable?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}
