import { ScreenLayout } from "@/components/ScreenLayout";
import { Colors } from "@/constants/theme";
import { styles } from "@/features/ProductsListing/ProductsListing.styles";
import { useProductsListingLogic } from "@/features/ProductsListing/useProductsListingLogic";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProductsListing() {
  const { categories, selectedCategory, handleSelectCategory } =
    useProductsListingLogic();

  return (
    <ScreenLayout style={styles.container}>
      <Text style={styles.title}>Discover</Text>

      <Text style={styles.subtitle}>Find your perfect products</Text>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color={Colors.text.secondary}
        />

        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor={Colors.text.secondary}
        />
      </View>

      <View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.categoriesContainer}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category) => {
            const isSelected = category === selectedCategory;

            if (isSelected) {
              return (
                <TouchableOpacity
                  key={category}
                  onPress={() => handleSelectCategory(category)}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={[
                      Colors.primary.gradientFrom,
                      Colors.primary.gradientTo,
                    ]}
                    style={[styles.categoryPill, { borderWidth: 0 }]}
                  >
                    <Text style={styles.categoryTextSelected}>{category}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }

            return (
              <TouchableOpacity
                key={category}
                style={styles.categoryPill}
                onPress={() => handleSelectCategory(category)}
              >
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <View></View>
    </ScreenLayout>
  );
}
