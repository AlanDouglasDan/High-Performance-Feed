import { Colors } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./ScreenLayout.styles";
import { ScreenLayoutProps } from "./ScreenLayout.types";
import { useScreenLayoutLogic } from "./useScreenLayoutLogic";

export function ScreenLayout({
  children,
  style,
  scrollable = true,
  header,
  footer,
}: ScreenLayoutProps) {
  const { insets } = useScreenLayoutLogic();

  return (
    <LinearGradient
      colors={[
        Colors.background.secondary,
        Colors.background.base,
        Colors.background.base,
        Colors.background.secondary,
      ]}
      style={styles.flex1}
    >
      <SafeAreaView style={styles.flex1}>
        <KeyboardAvoidingView
          style={styles.flex1}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={insets.top}
        >
          <View style={styles.flex1}>
            {header ? <View style={styles.header}>{header}</View> : null}

            <View style={styles.flex1}>
              {scrollable ? (
                <ScrollView
                  contentContainerStyle={styles.scrollContent}
                  keyboardShouldPersistTaps="handled"
                  showsVerticalScrollIndicator={false}
                >
                  <View style={style}>{children}</View>
                </ScrollView>
              ) : (
                <View style={style}>{children}</View>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>

        {footer ? <View>{footer}</View> : null}
      </SafeAreaView>
    </LinearGradient>
  );
}
