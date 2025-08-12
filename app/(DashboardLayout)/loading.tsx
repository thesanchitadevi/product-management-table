import { LoadingSpinner } from "@/components/ui/loading/loading"

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center p-4">
      <LoadingSpinner className="h-12 w-12" />
    </div>
  )
}
