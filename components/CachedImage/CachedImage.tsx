import { Image } from "expo-image";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { Colors } from "@/constants/theme";

import { styles } from "./CachedImage.styles";
import type { CachedImageProps } from "./CachedImage.types";
import { useCachedImageLogic } from "./useCachedImageLogic";

export const CachedImage: React.FC<CachedImageProps> = ({
  style,
  showLoadingIndicator = true,
  onLoad,
  onLoadEnd,
  onError,
  ...imageProps
}) => {
  const { isLoading, handleLoad, handleLoadEnd, handleError } =
    useCachedImageLogic({ onLoad, onLoadEnd, onError });

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
