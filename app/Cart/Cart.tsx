import { ScreenLayout } from "@/components/ScreenLayout";
import { styles } from "@/features/Cart/Cart.styles";
import { useCartLogic } from "@/features/Cart/useCartLogic";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Cart() {
  useCartLogic();
  const router = useRouter();

  return (
    <ScreenLayout style={styles.container}>
      <Text style={styles.title}>Cart Screen</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
        <Text style={styles.buttonText}>Go to Products Listing</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/ProductDetails/ProductDetails")}
      >
        <Text style={styles.buttonText}>Go to Product Details</Text>
      </TouchableOpacity>
    </ScreenLayout>
  );
}
