"use client"

import { Loader2 } from "lucide-react"

export const LoadingSpinner = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className="text-primary h-6 w-6 animate-spin" />
    </div>
  )
}
