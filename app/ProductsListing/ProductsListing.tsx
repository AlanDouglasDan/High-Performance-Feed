import { ScreenLayout } from "@/components/ScreenLayout";
import { Colors } from "@/constants/theme";
import { styles } from "@/features/ProductsListing/ProductsListing.styles";
import { useProductsListingLogic } from "@/features/ProductsListing/useProductsListingLogic";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProductsListing() {
  const { categories, selectedCategory, handleSelectCategory, products } =
    useProductsListingLogic();
  const router = useRouter();

  return (
    <ScreenLayout style={styles.container} scrollable={false}>
      <Text style={styles.title}>High Performance Feed</Text>

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
                    style={[styles.categoryPill, styles.categoryPillActive]}
                  >
                    <View style={styles.dimOverlay} />
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

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        columnWrapperStyle={styles.productsContainer}
        contentContainerStyle={{ paddingTop: 12 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productItem}
            activeOpacity={0.9}
            onPress={() =>
              router.push({
                pathname: "/ProductDetails/ProductDetails",
                params: { id: String(item.id) },
              })
            }
          >
            <Image
              source={{
                uri: item.thumbnailUrl,
              }}
              style={styles.imageContainer}
            />

            <View style={styles.productDetails}>
              <Text style={styles.productCategory}>
                {item.category.toUpperCase()}
              </Text>

              <Text style={styles.productName}>{item.title}</Text>

              <View style={styles.flexedRow}>
                <Text style={styles.productPrice}>
                  ${item.price.toFixed(2)}
                </Text>

                <View style={styles.flexedRow}>
                  <AntDesign name="star" size={14} color={Colors.accent.star} />

                  <Text style={styles.rating}>{item.rating.toFixed(1)}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScreenLayout>
  );
}
