import { Colors } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

interface ScreenLayoutProps {
  children: React.ReactNode;
  style?: ViewStyle;
  scrollable?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function ScreenLayout({
  children,
  style,
  scrollable = true,
  header,
  footer,
}: ScreenLayoutProps) {
  const insets = useSafeAreaInsets();

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

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
