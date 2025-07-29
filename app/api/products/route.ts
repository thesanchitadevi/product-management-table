import { NextRequest, NextResponse } from "next/server"
import { TProduct } from "@/types/product"

const API_URL = "https://api.restful-api.dev/objects"

export async function GET() {
  try {
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

    const products = (await res.json()) as TProduct[]
    return NextResponse.json(products || [])
  } catch (error) {
    console.error("Error in GET handler:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      throw new Error(`Failed to create product: ${res.status}`)
    }

    const product = (await res.json()) as TProduct
    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
