"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LoginRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <p className="text-white">Redirecting to login page...</p>
    </div>
  )
}
