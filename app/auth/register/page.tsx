// Add a redirect to prevent access to the register page
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to login page if someone tries to access the register page
    router.push("/auth/login")
  }, [router])

  return null
}
