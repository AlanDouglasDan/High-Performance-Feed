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
      colors={[Colors.background.secondary, Colors.background.base]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoiding}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={insets.top}
        >
          <View style={styles.layout}>
            {header ? <View style={styles.header}>{header}</View> : null}

            <View style={styles.body}>
              {scrollable ? (
                <ScrollView
                  contentContainerStyle={styles.scrollContent}
                  keyboardShouldPersistTaps="handled"
                  showsVerticalScrollIndicator={false}
                >
                  <View style={style}>{children}</View>
                </ScrollView>
              ) : (
                <View style={[styles.staticContent, style]}>{children}</View>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>

      {footer ? <View>{footer}</View> : null}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  layout: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  body: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  staticContent: {
    flex: 1,
  },
});
