"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { TProduct } from "@/types/product"

type TViewProductModal = {
  isOpen: boolean
  onClose: () => void
  product: TProduct
}

export function ViewProductModal({ isOpen, onClose, product }: TViewProductModal) {
  const productData = product.data || {}

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[80vh] w-[90vw] max-w-[500px] overflow-y-auto">
        <DialogHeader className="sticky top-0 z-10">
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <div className="mt-5 space-y-4">
          {/* Basic Card */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <Label className="text-muted-foreground">Product Name</Label>
                <p className="font-medium">{product.name}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-muted-foreground">Price</Label>
                <p className="font-medium">{productData.price ? `$${productData.price}` : "N/A"}</p>
              </div>
            </CardContent>
          </Card>

          {/* Design Card */}
          <Card>
            <CardHeader>
              <CardTitle>Design</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <Label className="text-muted-foreground">Color</Label>
                <p className="font-medium">{productData.Color || "N/A"}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-muted-foreground">Capacity</Label>
                <p className="font-medium">{productData.Capacity || "N/A"}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-muted-foreground">Case Size</Label>
                <p className="font-medium">{productData["Case Size"] || "N/A"}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-muted-foreground">Strap Color</Label>
                <p className="font-medium">{productData["Strap Colour"] || "N/A"}</p>
              </div>
            </CardContent>
          </Card>

          {/* Specifications Card */}
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <Label className="text-muted-foreground">Generation</Label>
                <p className="font-medium">{productData.Generation || productData.generation || "N/A"}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-muted-foreground">Screen Size</Label>
                <p className="font-medium">{productData["Screen size"] || "N/A"}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-muted-foreground">CPU Model</Label>
                <p className="font-medium">{productData["CPU model"] || "N/A"}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-muted-foreground">Hard Disk Size</Label>
                <p className="font-medium">{productData["Hard disk size"] || "N/A"}</p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Card */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <Label className="text-muted-foreground">Description</Label>
                <p className="font-medium">{productData.Description || "N/A"}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
