"use client"
import { ColumnDef } from "@tanstack/react-table"

// type of the object
export type TObject = {
  id: string
  name: string
  data: {
    color?: string
    capacity?: string
  }
}

export const tableColumns: ColumnDef<TObject>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "data.color",
    header: "Color",
    cell: ({ row }) => row.original.data?.color || "N/A",
  },
  {
    accessorKey: "data.capacity",
    header: "Capacity",
    cell: ({ row }) => row.original.data?.capacity || "N/A",
  },
]
