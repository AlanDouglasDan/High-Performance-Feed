import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export const useCartLogic = () => {
  const dispatch = useAppDispatch();
  const { items, totalItems, totalPrice } = useAppSelector(
    (state) => state.cart
  );

  const handleIncrement = (productId: number) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId: number) => {
    dispatch(decrementQuantity(productId));
  };

  const handleRemove = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  // Calculate shipping (free for orders over $50, otherwise $9.99)
  const shippingCost = totalPrice > 50 ? 0 : 9.99;
  const total = totalPrice + shippingCost;

  return {
    items,
    totalItems,
    subtotal: totalPrice,
    shippingCost,
    total,
    handleIncrement,
    handleDecrement,
    handleRemove,
  };
};
