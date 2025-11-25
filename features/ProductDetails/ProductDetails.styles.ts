import { Colors } from "@/constants/theme";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
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
  footerCard: {
    backgroundColor: Colors.background.secondary,
    paddingBottom: 28,
    paddingHorizontal: 16,
    paddingTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 0.25,
    borderTopColor: Colors.background.border,
  },
  text12: {
    fontSize: 12,
    color: Colors.text.secondary,
  },
  header22: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.text.primary,
  },
  gap: {
    gap: 4,
  },
  imageContainer: {
    width: "100%",
    height: 280,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.background.border,
    marginBottom: 24,
    backgroundColor: Colors.background.elevated,
  },
  semiheader14: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.text.primary,
  },
  flexedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  rating: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.text.primary,
  },
  reviewCount: {
    fontSize: 12,
    color: Colors.text.secondary,
  },
  marginTop: {
    marginTop: 12,
  },
  card: {
    backgroundColor: Colors.background.elevated,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.background.border,
    marginTop: 16,
  },
  semiheader13: {
    fontSize: 13,
    fontWeight: "500",
    color: Colors.text.secondary,
    lineHeight: 17,
  },
  spacedRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text14: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.text.secondary,
  },
  reviewContainer: {
    gap: 12,
    backgroundColor: Colors.background.secondary,
    padding: 12,
    marginTop: 12,
    borderRadius: 12,
  },
  gap0: {
    gap: 0,
  },
});
