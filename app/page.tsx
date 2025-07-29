import { Metadata } from "next"
import { ProductList } from "@/components/modules/Product/ProductList"
import { getAllProducts } from "./api/objects/route"

export const metadata: Metadata = {
  title: "Product Table",
}

export default async function Home() {
  const products = await getAllProducts()
  console.log("Data fetched:", products)

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <ProductList products={products} />
      </section>
    </>
  )
}
