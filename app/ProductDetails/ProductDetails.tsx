import { ScreenLayout } from "@/components/ScreenLayout";
import { styles } from "@/features/ProductDetails/ProductDetails.styles";
import { useProductDetailsLogic } from "@/features/ProductDetails/useProductDetailsLogic";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function ProductDetails() {
  useProductDetailsLogic();
  const router = useRouter();

  return (
    <ScreenLayout style={styles.container}>
      <Text style={styles.title}>Product Details Screen</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
        <Text style={styles.buttonText}>Go to Products Listing</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/Cart/Cart")}
      >
        <Text style={styles.buttonText}>Go to Cart</Text>
      </TouchableOpacity>
    </ScreenLayout>
  );
}
