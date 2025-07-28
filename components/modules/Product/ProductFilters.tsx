"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { TProduct } from "@/types/product"

export function ProductFilters({
  products,
  onFilter,
}: {
  products: TProduct[]
  onFilter: (filtered: TProduct[]) => void // callback for filtered product , void use for no return
}) {
  const [name, setName] = useState("")
  const [color, setColor] = useState<string | null>(null)
  const [price, setPrice] = useState(1000) // 1000 as default max price

  // dynamic colors
  const colors = Array.from(
    new Set(products.map((product) => product.data?.Color).filter((color): color is string => !!color))
  ).sort()

  // dynamic min-max price

  const maxPrice = Math.max(...products.map((product) => product.data?.price || 0).filter((price) => price > 0))

  // Apply filters
  useEffect(() => {
    const filtered = products.filter((product) => {
      if (name && !product.name.toLowerCase().includes(name.toLowerCase())) return false
      if (color !== null && product.data?.Color !== color) return false
      if (product.data?.price && product.data?.price > price) return false
      return true
    })
    onFilter(filtered)
  }, [name, color, price, products, onFilter])

  const handleReset = () => {
    setName("")
    setColor(null)
    setPrice(maxPrice)
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg border p-4">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
        {/* Name Search */}
        <div className="min-w-[200px] flex-1">
          <Input
            placeholder="Search products..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Color Select */}
        <div className="min-w-[180px] flex-1">
          <Select value={color ?? ""} onValueChange={(val) => setColor(val || null)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All colors" />
            </SelectTrigger>
            <SelectContent>
              {colors.map((color) => (
                <SelectItem key={color} value={color}>
                  {color}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Slider  */}
        <div className="min-w-[200px] flex-1">
          <div className="flex items-center gap-3">
            <span className="text-sm whitespace-nowrap">Max: ${price}</span>
            <Slider
              max={maxPrice}
              step={10}
              value={[price]}
              onValueChange={([val]) => setPrice(val ?? 0)}
              className="flex-1"
            />
          </div>
        </div>

        {/* Reset Button */}
        <Button variant="outline" onClick={handleReset} className="whitespace-nowrap">
          Reset
        </Button>
      </div>
    </div>
  )
}
