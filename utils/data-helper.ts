// Helper for table data handling

import { TProduct } from "@/types/product"

export const ProductHelper = <K extends keyof NonNullable<TProduct["data"]>>(
  product: TProduct,
  key: K, // key of product data
  fallback: string = "N/A" // default value
): string => {
  // if data is null then return fallback
  if (!product.data) {
    return fallback
  }

  const value = product.data[key]
  return value ? String(value) : fallback
}
