import { Metadata } from "next"
import ProductList from "@/components/modules/Product/ProductList"
import { getObjects } from "./api/objects/route"

export const metadata: Metadata = {
  title: "Table",
}

export default async function Home() {
  // Get Data
  const data = await getObjects()
  console.log("Data fetched:", data)

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <ProductList data={data} />
      </section>
    </>
  )
}
