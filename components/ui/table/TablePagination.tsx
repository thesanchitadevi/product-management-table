"use client"

import { Table } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ITablePagination<TData> {
  table: Table<TData>
  className?: string
  pageSizeOptions?: number[]
}

export function TablePagination<TData>({
  table,
  className = "",
  pageSizeOptions = [10, 25, 50, 75, 100],
}: ITablePagination<TData>) {
  const currentPage = table.getState().pagination.pageIndex + 1
  const totalPages = table.getPageCount()
  const pageRange = 2 // Number of pages to show around current page

  const getPageNumbers = () => {
    const pages = []
    pages.push(1) // Always show first page

    if (currentPage > pageRange + 2) {
      pages.push("...") // ellipsis if current page is far from start
    }

    // Add pages around current page
    for (let i = Math.max(2, currentPage - pageRange); i <= Math.min(totalPages - 1, currentPage + pageRange); i++) {
      pages.push(i)
    }

    if (currentPage < totalPages - pageRange - 1) {
      pages.push("...") // ellipsis if current page is far from end
    }

    if (totalPages > 1) {
      pages.push(totalPages) // Always show last page
    }

    return pages
  }

  return (
    <section className={`flex flex-col items-center justify-between gap-4 sm:flex-row ${className}`}>
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Rows per page</p>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value))
          }}
        >
          <SelectTrigger className="h-8 w-[80px] border-1 border-gray-300">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side="top">
            {pageSizeOptions.map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="mx-1 flex items-center gap-1">
          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <Button key={index} variant="ghost" size="sm" className="cursor-default" disabled>
                ...
              </Button>
            ) : (
              <Button
                key={index}
                variant={page === currentPage ? "default" : "outline"}
                size="sm"
                onClick={() => table.setPageIndex(Number(page) - 1)}
              >
                {page}
              </Button>
            )
          )}
        </div>

        <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
