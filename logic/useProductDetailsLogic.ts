import { addToCart } from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProductById } from "@/store/productsSlice";
import { useEffect, useState } from "react";

export const useProductDetailsLogic = (productId?: string) => {
  const dispatch = useAppDispatch();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { selectedProduct, loading, error } = useAppSelector(
    (state) => state.products
  );

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

  return {
    product: selectedProduct,
    loading,
    error,
    activeImageIndex,
    handleImageScroll,
    handleAddToCart,
  };
};
