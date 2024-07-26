import { Metadata } from "next"
import { SigninForm } from "@/components/Auth"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth-options"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Signin",
  description: "Sign in to your account",
}

export default async function SigninPage() {
  const session = await getServerSession(authOptions)

  if (!!session) {
    redirect("/dashboard")
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-slate-500">
            Use your email and password to sign in
          </p>
        </div>
        <SigninForm />
      </div>
    </div>
  )
}
