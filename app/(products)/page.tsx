import { ProductList } from "@/components/modules/Product/ProductList"
import { getAllProducts } from "@/lib/services/product"

export async function Products() {
  const products = await getAllProducts()
  console.log("Data fetched:", products)

  return <ProductList products={products} />
}
