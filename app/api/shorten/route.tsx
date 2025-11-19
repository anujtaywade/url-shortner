
import { NextResponse } from "next/server";
import {PrismaClient} from '@prisma/client';

export async function POST(req : Request){
    try {
        const prisma =new PrismaClient()
        const url = req.body
    } catch (error) {
        
    }
}