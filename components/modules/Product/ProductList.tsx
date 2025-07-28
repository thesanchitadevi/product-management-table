"use client"

import { Plus } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { tableColumns } from "@/components/ui/table/column/column"
import { DataTable } from "@/components/ui/table/DataTable"
import { DataTableHeader } from "@/components/ui/table/DataTableHeader"
import { TProduct } from "@/types/product"
import { ProductFilters } from "./ProductFilters"

const ProductList = ({ products, error }: { products: TProduct[]; error?: string }) => {
  // for filtered products
  const [filteredProducts, setFilteredProducts] = useState(products)

  //error handling
  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>
  }

  return (
    <main className="container mx-auto space-y-6 p-4">
      {/* Header Section */}
      <DataTableHeader
        title="Product Table"
        description="Manage your products here"
        actions={
          <Link href="/add-product" className="flex items-center space-x-2">
            <Button size="sm">
              <Plus className="h-4 w-4" />
              Add Product
            </Button>
          </Link>
        }
      />
      <div>
        <ProductFilters products={products} onFilter={setFilteredProducts} />
        {/* No data */}
        {filteredProducts.length === 0 && (
          <div className="text-muted-foreground pt-5 text-center">No products available.</div>
        )}
      </div>
      {/* Data Table Section */}
      <DataTable columns={tableColumns} data={filteredProducts} pageSize={10} />
    </main>
  )
}

export default ProductList
