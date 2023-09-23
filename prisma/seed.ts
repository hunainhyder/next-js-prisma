import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const student = await prisma.student.upsert({
        where: { age: "19" },
        update: {},
        create: {
            fullname: "Hunain",
            age: "19",
            course: "bscs",
            feePaid: "true"
        },
    });
}