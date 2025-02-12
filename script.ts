import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
 const user = await prisma.user.update ({
      where: {
        email: "closmbonimpa@gmail.com",
        },
      data: {
        userPreference: {
          connect: {
            id: '3f1a78a2 - 74d7- 4b34- b91c - 718db77c69ea'
          }
        }
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