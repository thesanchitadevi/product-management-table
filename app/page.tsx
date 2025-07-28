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
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              welcome
            </h1>
          </div>
        </div>
        <ProductList data={data} />
      </section>
    </>
  )
}
