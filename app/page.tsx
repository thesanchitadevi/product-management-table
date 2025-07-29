import { Metadata } from "next"
import { Suspense } from "react"
import { LoadingSpinner } from "@/components/ui/loading/loading"
import { Products } from "./(products)/page"

export const metadata: Metadata = {
  title: "Product Table",
}

export default async function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <Suspense
          fallback={
            <div className="flex items-center justify-center p-4">
              <LoadingSpinner className="h-12 w-12" />
            </div>
          }
        >
          <Products />
        </Suspense>
      </section>
    </>
  )
}
