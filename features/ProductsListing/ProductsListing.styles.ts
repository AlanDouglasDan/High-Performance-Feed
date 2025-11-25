import { StyleSheet } from "react-native";

import { Colors } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.text.primary,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  categoriesContainer: {
    gap: 10,
    marginBottom: 12,
    marginTop: 24,
  },
  categoryPill: {
    backgroundColor: Colors.background.card,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.background.border,
    position: "relative",
    overflow: "hidden",
  },
  categoryPillActive: {
    // borderColor: Colors.primary.gradientFrom,
  },
  categoryText: {
    color: Colors.text.secondary,
    fontSize: 14,
  },
  categoryTextSelected: {
    color: Colors.text.primary,
    fontSize: 14,
    fontWeight: "700",
  },
  productsContainer: {
    gap: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
  },
  productItem: {
    backgroundColor: Colors.background.elevated,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.background.border,
    width: "48%",
  },
  imageContainer: {
    width: "100%",
    height: 150,
    backgroundColor: Colors.background.card,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  productDetails: {
    padding: 12,
    gap: 4,
  },
  productCategory: {
    fontSize: 12,
    color: Colors.primary.gradientFrom,
    fontWeight: "700",
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.text.primary,
  },
  flexedRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    gap: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text.primary,
  },
  rating: {
    fontSize: 12,
    color: Colors.text.secondary,
  },
  dimOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.14)",
  },
  fabContainer: {
    position: "absolute",
    right: 16,
    bottom: 24,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
