"use client"

import { Table } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ITablePagination<TData> {
  table: Table<TData>
  className?: string
}

export function TablePagination<TData>({ table, className = "" }: ITablePagination<TData>) {
  return (
    <section className={`flex items-center justify-between ${className}`}>
      <div className="text-muted-foreground text-sm">
        Showing{" "}
        <strong>
          {table.getRowModel().rows.length} of {table.getFilteredRowModel().rows.length}
        </strong>{" "}
        items
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
