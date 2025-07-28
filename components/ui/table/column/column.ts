"use client"
import { ColumnDef } from "@tanstack/react-table"

export type TProduct = {
  id: string
  name: string
  data: {
    Color?: string
    Capacity?: string
    price?: number
    Generation?: string
    generation?: string
    Description?: string
    "Screen size"?: string
    "Strap Colour"?: string
    "Case Size"?: string
    "CPU model"?: string
    "Hard disk size"?: string
  } | null
}

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
    cell: ({ row }) => `$${row.original.data.price?.toFixed(2)}` || "N/A",
  },
  {
    accessorKey: "data.Color",
    header: "Color",
    cell: ({ row }) => row.original.data.Color || "N/A",
  },
  {
    accessorKey: "data.Capacity",
    header: "Capacity",
    cell: ({ row }) => row.original.data.Capacity || "N/A",
  },
  {
    accessorKey: "data.Generation",
    header: "Generation",
    cell: ({ row }) => row.original.data.Generation || row.original.data.generation || "N/A",
  },
  {
    accessorKey: "data.Description",
    header: "Description",
    cell: ({ row }) => row.original.data.Description || "N/A",
  },
  {
    accessorKey: "data.Screen size",
    header: "Screen Size",
    cell: ({ row }) => row.original.data["Screen size"] || "N/A",
  },
  {
    accessorKey: "data.Strap Colour",
    header: "Strap Color",
    cell: ({ row }) => row.original.data["Strap Colour"] || "N/A",
  },
  {
    accessorKey: "data.Case Size",
    header: "Case Size",
    cell: ({ row }) => row.original.data["Case Size"] || "N/A",
  },
  {
    accessorKey: "data.CPU model",
    header: "CPU Model",
    cell: ({ row }) => row.original.data["CPU model"] || "N/A",
  },
  {
    accessorKey: "data.Hard disk size",
    header: "Hard Disk Size",
    cell: ({ row }) => row.original.data["Hard disk size"] || "N/A",
  },
]
