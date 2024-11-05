import prisma from "@/lib/prisma";

export const getProducts = async () => {
    try {
        const Products = await prisma.products.findMany();

        return Products;  
    } catch {
        throw new Error("gagal fecth data Product")
    }
}

// export const getMaintenances = async () => {
//     try {
//         const Maintenances = await prisma.maintenance.findMany();

//         return Maintenances;
//     } catch (error) {
//         throw new Error("gagal fetch data maintenance")
//     }
// }

