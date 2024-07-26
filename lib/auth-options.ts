import { DefaultSession, NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import { compare } from "bcrypt"

// declare module "next-auth" {
//   interface Session {
//     // user: User & DefaultSession{"user"}
//     user: User & { code: string }
//   }
//   interface User {
//     role: String | null
//   }
// }

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt", maxAge: 3600 },
  pages: { signIn: "/signin" },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })
        if (!user) {
          return null
        }
        const isPasswordValid = await compare(
          credentials.password,
          user.password
        )
        if (!isPasswordValid) {
          return null
        }
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          code: user.role,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
        token.id = user.id
      }
      return token
      // return { ...token, role: user.code }
    },
    async session({ session, token }) {
      return { ...session, token }
    },
  },
}
