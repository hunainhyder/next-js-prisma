import { PrismaClient } from "@prisma/client";
import { prisma } from '@/lib/prisma';

async function main() {
    const student = await prisma.student.upsert({
        where: { id: "01" },
        update: {},
        create: {
            id: "01",
            fullname: "Hunain",
            age: "19",
            course: "bscs",
            feePaid: "true"
        },
    });

    console.log({ student })
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (error) => {
        console.log(`Something went wrong: ${error}`);
        await prisma.$disconnect();
        process.exit();
    })


