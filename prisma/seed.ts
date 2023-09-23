import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
}