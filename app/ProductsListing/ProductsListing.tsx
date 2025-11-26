import { CachedImage } from "@/components/CachedImage";
import { ScreenLayout } from "@/components/ScreenLayout";
import { Colors } from "@/constants/theme";
import { useProductsListingLogic } from "@/logic/useProductsListingLogic";
import { useAppSelector } from "@/store/hooks";
import { styles } from "@/styles/ProductsListing.styles";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProductsListing() {
  const {
    categories,
    selectedCategory,
    handleSelectCategory,
    products,
    loadMore,
    isLoading,
  } = useProductsListingLogic();
  const router = useRouter();
  const { totalItems } = useAppSelector((state) => state.cart);

  return (
    <ScreenLayout style={styles.container} scrollable={false}>
      <Text style={styles.title}>High Performance Feed</Text>

      <Text style={styles.subtitle}>Find your perfect products</Text>

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
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isLoading ? (
            <View style={{ padding: 20 }}>
              <Text
                style={{ color: Colors.text.secondary, textAlign: "center" }}
              >
                Loading...
              </Text>
            </View>
          ) : null
        }
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
            <CachedImage
              source={{
                uri: item.thumbnail,
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

      <View style={styles.fabContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.push("/Cart/Cart")}
        >
          <LinearGradient
            colors={[Colors.primary.gradientFrom, Colors.primary.gradientTo]}
            style={styles.fab}
          >
            <View style={styles.dimOverlay} />
            {totalItems > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{totalItems}</Text>
              </View>
            )}
            <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
}
