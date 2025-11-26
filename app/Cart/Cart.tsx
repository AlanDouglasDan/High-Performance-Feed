import { CachedImage } from "@/components/CachedImage";
import { GradientButton } from "@/components/GradientButton";
import { ScreenLayout } from "@/components/ScreenLayout";
import { Colors } from "@/constants/theme";
import { useCartLogic } from "@/logic/useCartLogic";
import { styles } from "@/styles/Cart.styles";

import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";

export default function Cart() {
  const {
    items,
    totalItems,
    subtotal,
    shippingCost,
    total,
    handleIncrement,
    handleDecrement,
    handleRemove,
    handleClearCart,
  } = useCartLogic();
  const router = useRouter();

  return (
    <ScreenLayout
      style={styles.container}
      scrollable={false}
      header={
        <View style={[styles.flexedRow, styles.marginTop]}>
          <TouchableOpacity
            style={styles.headerBackButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={20} color={Colors.text.primary} />
          </TouchableOpacity>

          <View style={styles.gap4}>
            <Text style={styles.header20}>My Cart</Text>

            <Text style={styles.text12}>
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </Text>
          </View>
        </View>
      }
      footer={
        items.length > 0 && (
          <View style={styles.footerContainer}>
            <View style={styles.spacedRow}>
              <Text style={styles.text14}>Subtotal</Text>

              <Text style={styles.text14}>${subtotal.toFixed(2)}</Text>
            </View>

            <View style={styles.spacedRow}>
              <Text style={styles.text14}>Shipping</Text>

              <Text style={styles.text14}>${shippingCost.toFixed(2)}</Text>
            </View>

            <View style={styles.line} />

            <View style={styles.spacedRow}>
              <Text style={styles.header16}>Total</Text>

              <Text style={styles.header16}>${total.toFixed(2)}</Text>
            </View>

            <GradientButton
              title="Checkout Now"
              onPress={() => {
                Alert.alert(
                  "Success",
                  "Your order has been placed successfully.",
                  [
                    {
                      text: "Go Home",
                      onPress: () => {
                        handleClearCart();
                        router.replace("/");
                      },
                    },
                  ]
                );
              }}
            />
          </View>
        )
      }
    >
      {items.length === 0 ? (
        <View style={styles.flexCenter}>
          <Text style={styles.header20}>Your cart is empty</Text>
        </View>
      ) : (
        <FlatList
          data={[...items].reverse()}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <CachedImage
                source={{ uri: item.thumbnail }}
                style={styles.image}
                contentFit="cover"
              />

              <View style={[styles.gap, styles.flex1]}>
                <Text
                  style={[styles.header16, { color: Colors.text.secondary }]}
                  numberOfLines={2}
                >
                  {item.title}
                </Text>

                <Text style={[styles.header16, { color: Colors.text.accent }]}>
                  ${item.price.toFixed(2)}
                </Text>

                <View style={styles.spacedRow}>
                  <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={() => handleDecrement(item.id)}>
                      <Feather
                        name="minus"
                        size={16}
                        color={Colors.text.primary}
                      />
                    </TouchableOpacity>

                    <Text style={styles.header16}>{item.quantity}</Text>

                    <TouchableOpacity onPress={() => handleIncrement(item.id)}>
                      <Feather
                        name="plus"
                        size={16}
                        color={Colors.text.primary}
                      />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity onPress={() => handleRemove(item.id)}>
                    <Feather
                      name="trash-2"
                      size={16}
                      color={Colors.accent.error}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </ScreenLayout>
  );
}
