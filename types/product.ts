/* eslint-disable @typescript-eslint/no-explicit-any */
type TProductData = {
  Color?: string | null
  Capacity?: string | null
  price?: number | null
  Generation?: string | null
  generation?: string | null
  Description?: string | null
  "Screen size"?: string | null
  "Strap Colour"?: string | null
  "Case Size"?: string | null
  "CPU model"?: string | null
  "Hard disk size"?: string | null
}

export type TProduct = {
  id: string
  name: string
  data: TProductData | null | undefined
}

export type TProductFilters = {
  name?: string
  data?: TProductData
}
