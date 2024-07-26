"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useSession } from "next-auth/react"
import { buttonVariants } from "@/components/ui/button"

export default function AuthCheck() {
  const { status } = useSession()

  if (status === "authenticated") {
    return (
      <>
        <Link
          href={"/dashboard"}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "px-4"
          )}
        >
          Go To Dashboard
        </Link>
      </>
    )
  } else {
    return (
      <>
        <Link
          href={"/signin"}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "px-4"
          )}
        >
          Sign In
        </Link>
      </>
    )
  }
}
