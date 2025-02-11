import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
   const user = await prisma.user.create({
      data: {
        name: "claude",
        email: "closmbonimpa1@gmail.comoo",
        age: 32,
       userPreference: {
        create: {
          emailUpdates: true,
        },
       },
      },
      include: {
        userPreference: true,
      },
    })
  console.log(user)
}

main()
 .catch(e => {
    console.log(e.message)
 })
  .finally(async () => {
    await prisma.$disconnect()
  })