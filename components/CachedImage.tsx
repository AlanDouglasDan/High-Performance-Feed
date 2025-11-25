import { Image, ImageProps } from "expo-image";
import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

import { Colors } from "@/constants/theme";

type Props = Omit<ImageProps, "style"> & {
  style?: StyleProp<ViewStyle>;
  showLoadingIndicator?: boolean;
};

export const CachedImage: React.FC<Props> = ({
  style,
  showLoadingIndicator = true,
  onLoad,
  onLoadEnd,
  onError,
  ...imageProps
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (event: unknown) => {
    setIsLoading(false);
    onLoad?.(event as any);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
    onLoadEnd?.();
  };

  const handleError = (error: unknown) => {
    setIsLoading(false);
    onError?.(error as any);
  };

  return (
    <View style={style}>
      <Image
        {...imageProps}
        style={StyleSheet.absoluteFillObject}
        cachePolicy="memory-disk"
        transition={200}
        onLoad={handleLoad}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
      />

      {showLoadingIndicator && isLoading && (
        <View style={[StyleSheet.absoluteFillObject, styles.loadingOverlay]}>
          <ActivityIndicator size="small" color={Colors.primary.gradientFrom} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingOverlay: {
    alignItems: "center",
    justifyContent: "center",
  },
});
