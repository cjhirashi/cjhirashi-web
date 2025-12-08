const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const profile = await prisma.profile.findFirst()
    console.log('Current Profile in DB:', profile)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
