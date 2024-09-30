import { prisma } from "@/lib/prisma"

export const getMaintenance = async () => {
    try {
        const maintenance = await prisma.maintenance.findMany();
        return maintenance;
    } catch (error) {
        throw new Error("gagal fecth data")
    }
}


