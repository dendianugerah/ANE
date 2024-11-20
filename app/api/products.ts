import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type ResponseData = {
    message?: string;
    data?: any;
}

export default async function handler(
    req : NextApiRequest,
    res : NextApiResponse<ResponseData>
) {
    const { method } = req;

    switch(method){
        case "GET":
            try{
                const products = await prisma.products.findMany();
                res.status(200).json({data: products});
            } catch (error){
                res.status(500).json({message:"gagal fetch data product rest api"});
            }
            break;
        
            default:
            res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}