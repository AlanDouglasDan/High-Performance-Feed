import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    // width: "100%",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "relative",
    overflow: "hidden",
  },
  prefixIcon: {
    marginRight: 8,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  dimOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.14)",
  },
});
