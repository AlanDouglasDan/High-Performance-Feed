import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useScreenLayoutLogic = () => {
  const insets = useSafeAreaInsets();

  return {
    insets,
  };
};
