import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();


export async function GET(

) {
    try{
        const products = await prisma.products.findMany();
        console.log("TestTEsttes", products)
        return new NextResponse(JSON.stringify(products))
    } catch (error){
        return new NextResponse(JSON.stringify(error))
    }
}