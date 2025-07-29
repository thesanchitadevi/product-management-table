"use client"
import { ColumnDef } from "@tanstack/react-table"
import { ProductActions } from "@/components/modules/Product/ProductActions"
import { TProduct } from "@/types/product"
import { ProductHelper } from "@/utils/data-helper"
import { EditableCell } from "./editCell"

export const tableColumns: ColumnDef<TProduct>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <EditableCell
        value={row.original.name}
        onUpdate={(value) => {
          console.log("Update:", value)
        }}
      />
    ),
  },
  {
    accessorKey: "data.price",
    header: "Price",
    cell: ({ row }) => {
      const price = ProductHelper(row.original, "price", "0")
      return (
        <EditableCell
          value={price}
          onUpdate={(value) => {
            console.log("Update price:", value)
          }}
          className="text-right"
        />
      )
    },
  },
  {
    accessorKey: "data.Color",
    header: "Color",
    cell: ({ row }) => {
      const color = ProductHelper(row.original, "Color", "-")
      return (
        <EditableCell
          value={color}
          onUpdate={(value) => {
            console.log("Update color:", value)
          }}
        />
      )
    },
  },
  {
    accessorKey: "data.Capacity",
    header: "Capacity",
    cell: ({ row }) => {
      const capacity = ProductHelper(row.original, "Capacity", "-")
      return (
        <EditableCell
          value={capacity}
          onUpdate={(value) => {
            console.log("Update capacity:", value)
          }}
        />
      )
    },
  },
  {
    accessorKey: "data.Generation",
    header: "Generation",
    cell: ({ row }) => {
      const generation =
        ProductHelper(row.original, "Generation", "-") || ProductHelper(row.original, "generation", "-")
      return <EditableCell value={generation} onUpdate={(value) => console.log("Update generation:", value)} />
    },
  },
  {
    accessorKey: "data.Description",
    header: "Description",
    cell: ({ row }) => {
      const description = ProductHelper(row.original, "Description", "-")
      return <EditableCell value={description} onUpdate={(value) => console.log("Update description:", value)} />
    },
  },
  {
    accessorKey: "data.Screen size",
    header: "Screen Size",
    cell: ({ row }) => {
      const screenSize = ProductHelper(row.original, "Screen size", "-")
      return <EditableCell value={screenSize} onUpdate={(value) => console.log("Update screen size:", value)} />
    },
  },
  {
    accessorKey: "data.Strap Colour",
    header: "Strap Color",
    cell: ({ row }) => {
      const strapColor = ProductHelper(row.original, "Strap Colour", "-")
      return <EditableCell value={strapColor} onUpdate={(value) => console.log("Update strap color:", value)} />
    },
  },
  {
    accessorKey: "data.Case Size",
    header: "Case Size",
    cell: ({ row }) => {
      const caseSize = ProductHelper(row.original, "Case Size", "-")
      return <EditableCell value={caseSize} onUpdate={(value) => console.log("Update case size:", value)} />
    },
  },
  {
    accessorKey: "data.CPU model",
    header: "CPU Model",
    cell: ({ row }) => {
      const cpuModel = ProductHelper(row.original, "CPU model", "-")
      return <EditableCell value={cpuModel} onUpdate={(value) => console.log("Update CPU model:", value)} />
    },
  },
  {
    accessorKey: "data.Hard disk size",
    header: "Hard Disk Size",
    cell: ({ row }) => {
      const hardDiskSize = ProductHelper(row.original, "Hard disk size", "-")
      return <EditableCell value={hardDiskSize} onUpdate={(value) => console.log("Update hard disk size:", value)} />
    },
  },
  {
    header: "Actions",
    cell: ({ row }) => <ProductActions product={row.original} />,
  },
]
