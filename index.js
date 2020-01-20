const { PrismaClient } = require('@prisma/client')

async function main() {
  const client = new PrismaClient()
  const result = await client.users.findMany()
  console.log(result)
}

main()
