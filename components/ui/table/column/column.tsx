"use client"
import { ColumnDef } from "@tanstack/react-table"
import { ProductActions } from "@/components/modules/Product/ProductActions"
import { TProduct } from "@/types/product"
import { ProductHelper } from "@/utils/data-helper"

export const tableColumns: ColumnDef<TProduct>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "data.price",
    header: "Price",
    cell: ({ row }) => {
      const price = ProductHelper(row.original, "price", "0")
      return price !== "N/A" ? `$${parseFloat(price).toFixed(2)}` : "-"
    },
  },
  {
    accessorKey: "data.Color",
    header: "Color",
    cell: ({ row }) => ProductHelper(row.original, "Color", "-"),
  },
  {
    accessorKey: "data.Capacity",
    header: "Capacity",
    cell: ({ row }) => ProductHelper(row.original, "Capacity", "-"),
  },
  {
    accessorKey: "data.Generation",
    header: "Generation",
    cell: ({ row }) => {
      // Try both "Generation" and "generation" keys
      const generation = ProductHelper(row.original, "Generation", "-")
      if (generation !== "-") return generation
      return ProductHelper(row.original, "generation", "-")
    },
  },
  {
    accessorKey: "data.Description",
    header: "Description",
    cell: ({ row }) => ProductHelper(row.original, "Description", "-"),
  },
  {
    accessorKey: "data.Screen size",
    header: "Screen Size",
    cell: ({ row }) => ProductHelper(row.original, "Screen size", "-"),
  },
  {
    accessorKey: "data.Strap Colour",
    header: "Strap Color",
    cell: ({ row }) => ProductHelper(row.original, "Strap Colour", "-"),
  },
  {
    accessorKey: "data.Case Size",
    header: "Case Size",
    cell: ({ row }) => ProductHelper(row.original, "Case Size", "-"),
  },
  {
    accessorKey: "data.CPU model",
    header: "CPU Model",
    cell: ({ row }) => ProductHelper(row.original, "CPU model", "-"),
  },
  {
    accessorKey: "data.Hard disk size",
    header: "Hard Disk Size",
    cell: ({ row }) => ProductHelper(row.original, "Hard disk size", "-"),
  },
  {
    header: "Actions",
    cell: ({ row }) => <ProductActions product={row.original} />,
  },
]
