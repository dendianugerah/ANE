import prisma from "@/lib/prisma";
import { unstable_noStore as noStore } from 'next/cache';


export const getProducts = async () => {
    noStore();
 
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

