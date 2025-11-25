import { GradientButton } from "@/components/GradientButton";
import { ScreenLayout } from "@/components/ScreenLayout";
import { Colors } from "@/constants/theme";
import { styles } from "@/features/ProductDetails/ProductDetails.styles";
import { useProductDetailsLogic } from "@/features/ProductDetails/useProductDetailsLogic";

import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function ProductDetails() {
  const { id } = useLocalSearchParams<{ id?: string }>();

  const {
    product,
    loading,
    error,
    activeImageIndex,
    handleImageScroll,
    handleAddToCart,
  } = useProductDetailsLogic(id);

  const router = useRouter();

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(event.nativeEvent.contentOffset.x / slideSize);
    handleImageScroll(index);
  };

  if (loading) {
    return (
      <ScreenLayout style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={Colors.primary.gradientFrom} />
        </View>
      </ScreenLayout>
    );
  }

  if (error || !product) {
    return (
      <ScreenLayout style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.semiheader14}>
            {error || "Product not found"}
          </Text>
        </View>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout
      style={styles.container}
      header={
        <TouchableOpacity
          style={styles.headerBackButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={20} color={Colors.text.primary} />
        </TouchableOpacity>
      }
      footer={
        <View style={styles.footerCard}>
          <View style={[styles.gap, styles.flexShrink]}>
            <Text style={styles.text12}>Total Price</Text>

            <Text style={styles.header22}>${product.price.toFixed(2)}</Text>
          </View>

          <GradientButton
            title="Add to Cart"
            prefixIcon={
              <Ionicons name="cart-outline" size={18} color="#FFFFFF" />
            }
            onPress={() => {
              handleAddToCart();
              router.push("/Cart/Cart");
            }}
          />
        </View>
      }
    >
      <View style={styles.carouselContainer}>
        <FlatList
          data={product.images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={[styles.carouselImage, { width: SCREEN_WIDTH - 32 }]}
              contentFit="cover"
            />
          )}
        />
        <View style={styles.dotsContainer}>
          {product.images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === activeImageIndex && styles.activeDot,
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.gap}>
        <Text
          style={[styles.semiheader14, { color: Colors.primary.gradientFrom }]}
        >
          {product.category.toUpperCase()}
        </Text>

        <Text style={styles.header22}>{product.title}</Text>

        <View style={[styles.flexedRow, styles.marginTop]}>
          <View style={[styles.flexedRow, styles.gap]}>
            <AntDesign name="star" size={14} color={Colors.accent.star} />

            <Text style={styles.rating}>{product.rating.toFixed(2)}</Text>

            <Text style={styles.reviewCount}>
              ({product.reviews.length} reviews)
            </Text>
          </View>

          <View style={[styles.flexedRow, styles.gap]}>
            <Entypo name="check" size={14} color={Colors.accent.success} />

            <Text
              style={[styles.reviewCount, { color: Colors.accent.success }]}
            >
              {product.availabilityStatus} ({product.stock})
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.semiheader13}>{product.description}</Text>
      </View>

      <View style={[styles.card, styles.spacedRow]}>
        <Text style={styles.text14}>SKU</Text>

        <Text style={styles.semiheader14}>{product.sku}</Text>
      </View>

      <View style={[styles.card, styles.spacedRow]}>
        <Text style={styles.text14}>Weight</Text>

        <Text style={styles.semiheader14}>{product.weight}g</Text>
      </View>

      <View style={[styles.card, styles.spacedRow]}>
        <Text style={styles.text14}>Shipping</Text>

        <Text style={styles.semiheader14}>{product.shippingInformation}</Text>
      </View>

      {product.reviews.length > 0 && (
        <View style={styles.card}>
          <Text style={styles.semiheader14}>Recent Reviews</Text>

          {product.reviews.map((review, idx) => (
            <View key={idx} style={styles.reviewContainer}>
              <View style={[styles.flexedRow, styles.gap]}>
                <View style={[styles.flexedRow, styles.gap0]}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Ionicons
                      key={index}
                      name="star"
                      size={12}
                      color={
                        index < review.rating
                          ? Colors.accent.star
                          : Colors.background.border
                      }
                    />
                  ))}
                </View>

                <Text style={styles.text12}>{review.reviewerName}</Text>
              </View>

              <Text style={styles.semiheader13}>{review.comment}</Text>
            </View>
          ))}
        </View>
      )}
    </ScreenLayout>
  );
}
