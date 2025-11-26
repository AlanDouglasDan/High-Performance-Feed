import { Colors } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./GradientButton.styles";
import { GradientButtonProps } from "./GradientButton.types";
import { useGradientButtonLogic } from "./useGradientButtonLogic";

export function GradientButton(props: GradientButtonProps) {
  const { title, onPress, prefixIcon, style, textStyle } =
    useGradientButtonLogic(props);

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={style}>
      <LinearGradient
        colors={[Colors.primary.gradientFrom, Colors.primary.gradientTo]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.button}
      >
        <View style={styles.dimOverlay} />
        {prefixIcon ? (
          <View style={styles.prefixIcon}>{prefixIcon}</View>
        ) : null}
        <Text style={[styles.label, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
