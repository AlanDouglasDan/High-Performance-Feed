import { GradientButton } from "@/components/GradientButton";
import { ScreenLayout } from "@/components/ScreenLayout";
import { Colors } from "@/constants/theme";
import { styles } from "@/features/Cart/Cart.styles";
import { useCartLogic } from "@/features/Cart/useCartLogic";

import { Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Cart() {
  useCartLogic();
  const router = useRouter();

  return (
    <ScreenLayout
      style={styles.container}
      header={
        <View style={styles.flexedRow}>
          <TouchableOpacity
            style={styles.headerBackButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={20} color={Colors.text.primary} />
          </TouchableOpacity>

          <View style={styles.gap4}>
            <Text style={styles.header20}>My Cart</Text>

            <Text style={styles.text12}>3 items</Text>
          </View>
        </View>
      }
      footer={
        <View style={styles.footerContainer}>
          <View style={styles.spacedRow}>
            <Text style={styles.text14}>Subtotal</Text>

            <Text style={styles.text14}>$9.99</Text>
          </View>

          <View style={styles.spacedRow}>
            <Text style={styles.text14}>Shipping</Text>

            <Text style={styles.text14}>$9.99</Text>
          </View>

          <View style={styles.line} />

          <View style={styles.spacedRow}>
            <Text style={styles.header16}>Total</Text>

            <Text style={styles.header16}>$9.99</Text>
          </View>

          <GradientButton
            title="Checkout Now"
            onPress={() => {
              // TODO: implement checkout flow
            }}
          />
        </View>
      }
    >
      {[...Array(3)].map((_, index) => (
        <View key={index} style={styles.card}>
          <Image
            source={{
              uri: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
            }}
            style={styles.image}
          />

          <View style={[styles.gap, styles.flex1]}>
            <Text style={[styles.header16, { color: Colors.text.secondary }]}>
              Essence Mascara Lash Princess
            </Text>

            <Text style={[styles.header16, { color: Colors.text.accent }]}>
              $9.99
            </Text>

            <View style={styles.spacedRow}>
              <View style={styles.counterContainer}>
                <TouchableOpacity>
                  <Feather name="minus" size={16} color={Colors.text.primary} />
                </TouchableOpacity>

                <Text style={styles.header16}>1</Text>

                <TouchableOpacity>
                  <Feather name="plus" size={16} color={Colors.text.primary} />
                </TouchableOpacity>
              </View>

              <Feather name="trash-2" size={16} color={Colors.accent.error} />
            </View>
          </View>
        </View>
      ))}
    </ScreenLayout>
  );
}
