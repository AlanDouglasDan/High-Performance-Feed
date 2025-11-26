import type { ImageProps } from "expo-image";
import type { StyleProp, ViewStyle } from "react-native";

export type CachedImageProps = Omit<ImageProps, "style"> & {
  style?: StyleProp<ViewStyle>;
  showLoadingIndicator?: boolean;
};
