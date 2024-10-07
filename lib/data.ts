import { prisma } from "@/lib/prisma"

export const getProducts = async () => {
    try {
        const Products = await prisma.products.findMany();

        return Products;  
    } catch (error) {
        throw new Error("gagal fecth data")
    }
}


