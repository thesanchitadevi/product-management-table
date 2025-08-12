// app/dashboard/page.tsx
import { Metadata } from "next"
import { Suspense } from "react"
import { Products } from "@/components/modules/Product"
import { LoadingSpinner } from "@/components/ui/loading/loading"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default async function Home() {
  return (
    <div className="min-h-[calc(100vh-2rem)] w-full border border-red-800">
      <h2 className="border border-amber-400">Dashboard</h2>

      <div className="w-full flex-1 overflow-hidden">
        <Suspense
          fallback={
            <div className="flex h-full items-center justify-center">
              <LoadingSpinner className="h-12 w-12" />
            </div>
          }
        ></Suspense>
      </div>
      <div className="w-full border-4 border-blue-800">
        <Products />
      </div>
    </div>
  )
}
