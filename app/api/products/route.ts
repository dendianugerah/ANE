import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

type ResponseData = {
    message?: string;
    data?: any;
}

export async function GET(
    req : NextRequest
) {
    try{
        const products = await prisma.products.findMany();
        console.log("TestTEsttes", products)
        return new NextResponse(JSON.stringify(products))
    } catch (error){
        return new NextResponse(JSON.stringify("error"))
    }
}