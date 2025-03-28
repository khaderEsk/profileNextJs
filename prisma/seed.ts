// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // إضافة بيانات المحافظات
    const governorates = [
        { id: 1, name: "دمشق" },
        { id: 2, name: "ريف دمشق" },
        { id: 3, name: "حلب" },
        { id: 4, name: "حمص" },
        { id: 5, name: "اللاذقية" },
        { id: 6, name: "حماة" },
        { id: 7, name: "طرطوس" },
        { id: 8, name: "إدلب" },
        { id: 9, name: "دير الزور" },
        { id: 10, name: "الحسكة" },
        { id: 11, name: "الرقة" },
        { id: 12, name: "السويداء" },
        { id: 13, name: "درعا" },
        { id: 14, name: "القنيطرة" },
    ];

    for (const governorate of governorates) {
        await prisma.governorate.upsert({
            where: { id: governorate.id },
            update: {},
            create: governorate,
        });
    }
    console.log("تمت إضافة المحافظات بنجاح!");

}

main()
    .catch((e) => {
        console.error("حدث خطأ أثناء إضافة البيانات:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });