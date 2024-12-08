import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const {data, error} = await supabase
        .from("Products")
        .select("*");
        
        if (error) throw error;

        return NextResponse.json(data);
    }catch (error: unknown){
        const errorMessage = error instanceof Error ? error.message: "An unknown Error occured";
        return NextResponse.json({error: errorMessage}, {status:500});
    }

}