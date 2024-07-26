import prisma from "../lib/prisma"
import { hash } from "bcrypt"

async function main() {
  // Seed users
  const password = await hash("password", 12)
  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: "user@gmail.com" },
      update: {},
      create: {
        name: "User",
        email: "user@gmail.com",
        password: password,
      },
    }),
    prisma.user.upsert({
      where: { email: "admin@gmail.com" },
      update: {},
      create: {
        name: "Admin",
        email: "admin@gmail.com",
        password: password,
        role: "ADMIN",
      },
    }),
    prisma.user.upsert({
      where: { email: "sadmin@gmail.com" },
      update: {},
      create: {
        name: "SuperAdmin",
        email: "sadmin@gmail.com",
        password: password,
        role: "SUPERADMIN",
      },
    }),
  ])
  console.log(users)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
