import { persistor, store } from "@/store/reducers";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Stack screenOptions={{ headerShown: false }} />
        </PersistGate>
      </Provider>

      <StatusBar style="light" />
    </ThemeProvider>
  );
}
