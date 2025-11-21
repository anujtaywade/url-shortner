
import { NextRequest, NextResponse } from "next/server"
import {connectDb} from '@/lib/mongodb'
import schema from '@/lib/models/schema'

export async function GET(req : Request) {
    try {
        const {searchParams} = new URL(req.url)
    const _id = searchParams.get("_id")

    if (!_id){
        return NextResponse.json({message : "id is required"},{status : 400})
    }

    await connectDb();

    const fetchUrl = await schema.findById(_id);

    if (!fetchUrl){
        return NextResponse.json({messge : "Url not found"},{status : 404})
    }

    return NextResponse.json({
        mesage : "Url fetch successfully",
        data : fetchUrl,
    })
    } catch (error) {
        return NextResponse.json({message : "internal server error"},{status : 500})
    }
}