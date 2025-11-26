import type React from "react";
import type {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

export interface GradientButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  prefixIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
