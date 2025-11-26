import { useState } from "react";

import type { CachedImageProps } from "./CachedImage.types";

type HandlersInput = Pick<CachedImageProps, "onLoad" | "onLoadEnd" | "onError">;

export const useCachedImageLogic = ({
  onLoad,
  onLoadEnd,
  onError,
}: HandlersInput) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (event: unknown) => {
    setIsLoading(false);
    onLoad?.(event as any);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
    onLoadEnd?.();
  };

  const handleError = (error: unknown) => {
    setIsLoading(false);
    onError?.(error as any);
  };

  return {
    isLoading,
    handleLoad,
    handleLoadEnd,
    handleError,
  };
};
