import { Colors } from "@/constants/theme";

import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerBackButton: {
    width: 40,
    height: 40,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.background.border,
  },
  marginTop: {
    marginTop: Platform.OS === "android" ? 12 : 0,
  },
  footerContainer: {
    backgroundColor: Colors.background.secondary,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 0.25,
    borderTopColor: Colors.background.border,
    gap: 16,
  },
  gap4: {
    gap: 4,
  },
  flexedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  header20: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text.primary,
  },
  text12: {
    fontSize: 12,
    color: Colors.text.secondary,
  },
  spacedRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  text14: {
    fontSize: 14,
    color: Colors.text.primary,
  },
  header16: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text.primary,
  },
  line: {
    height: 1,
    backgroundColor: Colors.background.border,
  },
  card: {
    backgroundColor: Colors.background.elevated,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.background.border,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 8,
    backgroundColor: Colors.background.card,
  },
  gap: {
    gap: 8,
  },
  flex1: {
    flex: 1,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    borderRadius: 8,
    backgroundColor: Colors.background.secondary,
    padding: 8,
  },
});
