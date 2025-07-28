"use client"

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import React, { useState } from "react"
import { TablePagination } from "./TablePagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"
import { Button } from "../button"
import { Input } from "../input"

interface ITableData<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pageSize?: number
  className?: string
  header?: React.ReactNode
  footer?: React.ReactNode
}

export function DataTable<TData, TValue>({
  data,
  columns,
  pageSize = 10,
  className = "",
  header,
  footer,
}: ITableData<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable<TData>({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
    },
  })

  return (
    <main className={`flex flex-col space-y-4 ${className}`}>
      {/* Header */}
      {header && <div>{header}</div>}

      {/* Filters */}
      <div className="flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4">
          {/* Name Filter */}
          <Input
            placeholder="Filter names..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
        </div>

        {/* Clear All Filters Button */}
        <Button variant="outline" onClick={() => table.resetColumnFilters()} className="ml-auto">
          Clear Filters
        </Button>
      </div>
      {/* Table Start */}
      <div className={`rounded-md border ${className}`}>
        <Table>
          <TableHeader className="bg-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.column.getCanSort() ? (
                      <Button
                        variant="ghost"
                        onClick={() => header.column.toggleSorting()}
                        className="px-0 hover:bg-transparent"
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      flexRender(header.column.columnDef.header, header.getContext())
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={table.getAllColumns().length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Table Pagination */}
        <TablePagination table={table} className="border-t p-4" />
      </div>
      {/* Table End */}
      {/* Footer */}
      {footer && <div>{footer}</div>}
    </main>
  )
}
