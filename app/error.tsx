"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md border-0 shadow-lg">
        <CardHeader className="items-center space-y-4">
          <h1 className="text-center text-2xl font-bold text-red-800">Something went wrong</h1>
        </CardHeader>

        <CardContent className="space-y-4 text-center">
          <p className="text-gray-600">We encountered an unexpected error. Please try again.</p>
          <div className="rounded-lg bg-gray-100 p-4">
            <code className="text-sm break-words text-red-500">{error.message}</code>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center gap-4">
          <Button
            onClick={reset}
            variant="default"
            size="lg"
            className="gap-2 bg-blue-600 transition-colors hover:bg-blue-700"
          >
            <span>Try Again</span>
          </Button>
          <Button variant="default" size="lg" className="gap-2 bg-blue-600 transition-colors hover:bg-blue-700">
            <Link href="/">Go Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
