import React from "react"
import { tableColumns } from "@/components/ui/table/column/column"
import { DataTable } from "@/components/ui/table/DataTable"
import { TProduct } from "@/types/product"

const ProductList = ({ data }: { data: TProduct[] }) => {
  return (
    <main className="container mx-auto p-4">
      <DataTable columns={tableColumns} data={data} pageSize={10} />
    </main>
  )
}

export default ProductList
