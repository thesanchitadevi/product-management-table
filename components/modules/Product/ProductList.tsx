"use client"

import { Plus } from "lucide-react"
import React from "react"
import { Button } from "@/components/ui/button"
import { tableColumns } from "@/components/ui/table/column/column"
import { DataTable } from "@/components/ui/table/DataTable"
import { DataTableHeader } from "@/components/ui/table/DataTableHeader"
import { TProduct } from "@/types/product"

const ProductList = ({ data }: { data: TProduct[] }) => {
  return (
    <main className="container mx-auto space-y-6 p-4">
      {/* Data Table Section */}
      <DataTable
        columns={tableColumns}
        data={data}
        pageSize={10}
        header={
          <DataTableHeader
            title="Product Table"
            description="Manage your products here"
            actions={
              <Button size="sm">
                <Plus className="h-4 w-4" />
                Add Product
              </Button>
            }
          />
        }
        /* If Data is Empty */
        {...(data?.length === 0 && (
          <div className="p-4 text-center">
            <p className="text-muted-foreground">No products available</p>
          </div>
        ))}
      />
    </main>
  )
}

export default ProductList
