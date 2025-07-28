"use client"

import { Trash2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { deleteProduct } from "@/app/api/objects/route"
import { DeleteConfirmModal } from "@/components/modals/DeleteConfirmModal"
import { Button } from "@/components/ui/button"
import { TProduct } from "@/types/product"

export function ProductActions({ product }: { product: TProduct }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    // console.log(`Deleting product: ${product.name} (${product.id})`)

    try {
      const success = await deleteProduct(product.id)
      if (success) {
        toast.success(`Product ${product.name} deleted successfully!`)
      }
    } catch (error) {
      console.error("Error deleting product:", error)
      toast.error(`Failed to delete product ${product.name}. Please try again.`)
    } finally {
      setIsDeleting(false)
      setIsDeleteModalOpen(false)
    }
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsDeleteModalOpen(true)}
        className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 hover:text-red-700"
        title="Delete product"
      >
        <Trash2 className="h-4 w-4" />
      </Button>

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title={`Delete ${product.name}?`}
        isLoading={isDeleting}
      />
    </>
  )
}
