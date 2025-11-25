import { StyleSheet } from "react-native";

import { Colors } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.background.card,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.background.border,
    marginVertical: 24,
  },
  searchInput: {
    flex: 1,
    color: Colors.text.primary,
    marginLeft: 12,
  },
  categoriesContainer: {
    gap: 10,
  },
  categoryPill: {
    backgroundColor: Colors.background.card,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.background.border,
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
});
