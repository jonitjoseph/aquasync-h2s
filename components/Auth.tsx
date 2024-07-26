"use client"

import { useState } from "react"
import { signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { buttonVariants } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Loader2 } from "lucide-react"

export function SigninForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  async function onSubmit(e: React.FormEvent) {
    setIsLoading(true)
    e.preventDefault()
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/dashboard",
        redirect: false,
      })
      if (response?.ok) {
        setIsLoading(false)
        router.push("/dashboard")
      }
      if (response?.error === "CredentialsSignin") {
        setIsLoading(false)
        setError("Incorrect Email or Password!")
      }
    } catch (error: any) {
      setIsLoading(false)
      setError(error?.message)
      console.log(error)
    }
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="mb-4 grid gap-1">
            <Label className="p-2" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="p-2" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In
          </button>
          {error ? (
            <>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </>
          ) : null}
        </div>
      </form>
    </div>
  )
}

export function SignoutButton() {
  return (
    <>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
      >
        Sign Out
      </button>
    </>
  )
}
