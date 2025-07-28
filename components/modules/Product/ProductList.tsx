import React from "react"
import { sampleProducts } from "@/app/data"
import { tableColumns } from "@/components/ui/table/column/column"
import { DataTable } from "@/components/ui/table/DataTable"

const ProductList = () => {
  return (
    <>
      <DataTable columns={tableColumns} data={sampleProducts} pageSize={10} />
    </>
  )
}

export default ProductList
