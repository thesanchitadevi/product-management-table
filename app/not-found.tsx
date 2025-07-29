"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Card className="w-full max-w-md border-0 bg-gray-200 shadow-lg">
        <CardHeader className="items-center space-y-6">
          <span className="bg-primary relative block rounded px-4 py-2 text-center text-lg font-medium text-white">
            404 Page Not Found
          </span>
        </CardHeader>

        <CardContent className="text-center">
          <p className="text-gray-800">The page you're looking for doesn't exist or has been moved.</p>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button asChild variant="default" size="lg" className="gap-2">
            <Link href="/">Go Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
