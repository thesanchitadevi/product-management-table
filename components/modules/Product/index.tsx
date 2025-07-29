import { getAllProducts } from "@/lib/services/product"
import { ProductList } from "./ProductList"

export async function Products() {
  const products = await getAllProducts()
  console.log("Data fetched:", products)

  return <ProductList products={products} />
}
