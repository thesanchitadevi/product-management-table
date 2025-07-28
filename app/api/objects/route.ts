import { TProduct } from "@/types/product"

export async function getObjects(): Promise<TProduct[]> {
  try {
    // Fetch data using rest api
    const res = await fetch("https://api.restful-api.dev/objects", {
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
