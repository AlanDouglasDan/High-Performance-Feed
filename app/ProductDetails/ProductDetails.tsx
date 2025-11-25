import { GradientButton } from "@/components/GradientButton";
import { ScreenLayout } from "@/components/ScreenLayout";
import { Colors } from "@/constants/theme";
import { styles } from "@/features/ProductDetails/ProductDetails.styles";
import { useProductDetailsLogic } from "@/features/ProductDetails/useProductDetailsLogic";

import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProductDetails() {
  const { id } = useLocalSearchParams<{ id?: string }>();

  useProductDetailsLogic(id);

  const router = useRouter();

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
          <View style={styles.gap}>
            <Text style={styles.text12}>Total Price</Text>

            <Text style={styles.header22}>$9.99</Text>
          </View>

          <GradientButton
            title="Add to Cart"
            prefixIcon={
              <Ionicons name="cart-outline" size={18} color="#FFFFFF" />
            }
            onPress={() => {
              router.push("/Cart/Cart");
            }}
          />
        </View>
      }
    >
      <Image
        source={{
          uri: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
        }}
        style={styles.imageContainer}
      />

      <View style={styles.gap}>
        <Text
          style={[styles.semiheader14, { color: Colors.primary.gradientFrom }]}
        >
          BEAUTY
        </Text>

        <Text style={styles.header22}>Essence Mascara Lash Princess</Text>

        <View style={[styles.flexedRow, styles.marginTop]}>
          <View style={[styles.flexedRow, styles.gap]}>
            <AntDesign name="star" size={14} color={Colors.accent.star} />

            <Text style={styles.rating}>2.56</Text>

            <Text style={styles.reviewCount}>(3 reviews)</Text>
          </View>

          <View style={[styles.flexedRow, styles.gap]}>
            <Entypo name="check" size={14} color={Colors.accent.success} />

            <Text
              style={[styles.reviewCount, { color: Colors.accent.success }]}
            >
              In Stock (99)
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.semiheader13}>
          The Essence Mascara Lash Princess is a popular mascara known for its
          volumizing and lengthening effects. Achieve dramatic lashes with this
          long-lasting and cruelty-free formula.
        </Text>
      </View>

      <View style={[styles.card, styles.spacedRow]}>
        <Text style={styles.text14}>SKU</Text>

        <Text style={styles.semiheader14}>BEA-ESS-ESS-001</Text>
      </View>

      <View style={[styles.card, styles.spacedRow]}>
        <Text style={styles.text14}>Weight</Text>

        <Text style={styles.semiheader14}>100g</Text>
      </View>

      <View style={[styles.card, styles.spacedRow]}>
        <Text style={styles.text14}>Shipping</Text>

        <Text style={styles.semiheader14}>3-5 business days</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.semiheader14}>Recent Reviews</Text>

        <View style={styles.reviewContainer}>
          <View style={[styles.flexedRow, styles.gap]}>
            <View style={[styles.flexedRow, styles.gap0]}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Ionicons
                  key={index}
                  name="star"
                  size={12}
                  color={Colors.accent.star}
                />
              ))}
            </View>

            <Text style={styles.text12}>Eleanor Collins</Text>
          </View>

          <Text style={styles.semiheader13}>Highly impressed!</Text>
        </View>
      </View>
    </ScreenLayout>
  );
}
