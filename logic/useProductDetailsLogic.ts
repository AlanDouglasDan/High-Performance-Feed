import { addToCart } from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProductById } from "@/store/productsSlice";

import { useEffect, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export const useProductDetailsLogic = (productId?: string) => {
  const dispatch = useAppDispatch();

  const { selectedProduct, loading, error } = useAppSelector(
    (state) => state.products
  );

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(Number(productId)));
    }
  }, [productId, dispatch]);

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(
        addToCart({
          id: selectedProduct.id,
          title: selectedProduct.title,
          price: selectedProduct.price,
          category: selectedProduct.category,
          thumbnail: selectedProduct.thumbnail,
        })
      );
    }
  };

  const handleImageScroll = (index: number) => {
    setActiveImageIndex(index);
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(event.nativeEvent.contentOffset.x / slideSize);

    handleImageScroll(index);
  };

  return {
    product: selectedProduct,
    loading,
    error,
    activeImageIndex,
    handleAddToCart,
    onScroll,
    screenWidth,
  };
};
