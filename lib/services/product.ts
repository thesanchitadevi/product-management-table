import { TProduct } from "@/types/product"

const API_URL = "https://api.restful-api.dev/objects"

export async function getAllProducts(): Promise<TProduct[]> {
  try {
    // Fetch data using rest api
    const res = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const response = (await res.json()) as TProduct[]

    return response || []
  } catch (error) {
    console.error("Error in GET handler:", error)
    return []
  }
}

export async function getProductById(id: string): Promise<TProduct | null> {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch product ${id}: ${res.status}`)
    }

    return (await res.json()) as TProduct
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error)
    return null
  }
}

export async function createProduct(product: Omit<TProduct, "id">): Promise<TProduct | null> {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })

    if (!res.ok) {
      throw new Error(`Failed to create product: ${res.status}`)
    }

    return (await res.json()) as TProduct
  } catch (error) {
    console.error("Error creating product:", error)
    return null
  }
}

export async function updateProduct(id: string, updates: Partial<TProduct>): Promise<TProduct | null> {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    })

    if (!res.ok) {
      throw new Error(`Failed to update product ${id}: ${res.status}`)
    }

    return (await res.json()) as TProduct
  } catch (error) {
    console.error(`Error updating product ${id}:`, error)
    return null
  }
}

export async function deleteProduct(id: string): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })

    if (!res.ok) {
      throw new Error(`Failed to delete product ${id}: ${res.status}`)
    }

    return true
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error)
    return false
  }
}
