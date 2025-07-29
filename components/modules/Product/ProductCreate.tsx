"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createProduct } from "@/lib/services/product"
import { TProduct } from "@/types/product"

export default function ProductCreate() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [product, setProduct] = useState<Omit<TProduct, "id">>({
    name: "",
    data: {
      Color: null,
      Capacity: null,
      price: null,
      Generation: null,
      Description: null,
      "Screen size": null,
      "Strap Colour": null,
      "Case Size": null,
      "CPU model": null,
      "Hard disk size": null,
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("Submitting product:", product)

    try {
      const createdProduct = await createProduct(product)
      if (createdProduct) {
        toast.success(`Product ${createdProduct.name} created successfully!`)
        router.push("/")
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to create product")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === "name") {
      setProduct((prev) => ({ ...prev, name: value }))
    } else {
      setProduct((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          [name]: value === "" ? null : name === "price" ? Number(value) : value,
        },
      }))
    }
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-2xl font-bold">Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Card */}
        <Card>
          <CardHeader>
            <CardTitle>Basic </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name *</Label>
              <Input id="name" name="name" value={product.name} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={product.data?.price || ""}
                onChange={handleChange}
                step="1.00"
              />
            </div>
          </CardContent>
        </Card>

        {/* Design Card */}
        <Card>
          <CardHeader>
            <CardTitle>Design</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="Color">Color</Label>
              <Input id="Color" name="Color" value={product.data?.Color || ""} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Capacity">Capacity</Label>
              <Input id="Capacity" name="Capacity" value={product.data?.Capacity || ""} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Case Size">Case Size</Label>
              <Input
                id="Case Size"
                name="Case Size"
                value={product.data?.["Case Size"] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Strap Colour">Strap Color</Label>
              <Input
                id="Strap Colour"
                name="Strap Colour"
                value={product.data?.["Strap Colour"] || ""}
                onChange={handleChange}
              />
            </div>
          </CardContent>
        </Card>

        {/* Specifications Card */}
        <Card>
          <CardHeader>
            <CardTitle>Specifications</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="Generation">Generation</Label>
              <Input
                id="Generation"
                name="Generation"
                value={product.data?.Generation || product.data?.generation || ""}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Screen size">Screen Size</Label>
              <Input
                id="Screen size"
                name="Screen size"
                value={product.data?.["Screen size"] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="CPU model">CPU Model</Label>
              <Input
                id="CPU model"
                name="CPU model"
                value={product.data?.["CPU model"] || ""}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Hard disk size">Hard Disk Size</Label>
              <Input
                id="Hard disk size"
                name="Hard disk size"
                value={product.data?.["Hard disk size"] || ""}
                onChange={handleChange}
              />
            </div>
          </CardContent>
        </Card>

        {/* Additional Card */}
        <Card>
          <CardHeader>
            <CardTitle>Additional</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="Description">Description</Label>
              <Input
                id="Description"
                name="Description"
                value={product.data?.Description || ""}
                onChange={handleChange}
              />
            </div>
          </CardContent>
        </Card>

        {/* Form Actions */}

        <CardFooter className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.push("/")}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Product"}
          </Button>
        </CardFooter>
      </form>
    </div>
  )
}
