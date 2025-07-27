import { Metadata } from "next"
import { tableColumns } from "components/modules/table/column"
import { DataTable } from "components/modules/table/DataTable"
import { getObjects } from "./api/objects/route"

export const metadata: Metadata = {
  title: "Table",
}

const sampleProducts = [
  {
    id: "1",
    name: "Laptop",
    price: 999.99,
    data: {
      color: "Silver",
      capacity: "512GB SSD",
    },
  },
  {
    id: "2",
    name: "Smartphone",
    price: 699.99,
    data: {
      color: "Black",
      capacity: "256GB",
    },
  },
  {
    id: "3",
    name: "Desk Chair",
    price: 199.99,
    data: {
      color: "Brown",
      capacity: "Standard",
    },
  },
]

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
        <div className="mx-auto max-w-7xl px-4 py-8">
          <DataTable columns={tableColumns} data={sampleProducts} />
        </div>
      </section>
    </>
  )
}
