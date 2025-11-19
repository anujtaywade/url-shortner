
import { nanoid } from "nanoid";
import next from "next";
import { NextResponse } from "next/server";
import {prisma} from '@/lib/db'


export async function POST(req : Request){
    try {
       
        const {url } = await req.json() 
        
        if(!url || (!url.startsWith('http://') && !url.startsWith('https://')))
            { return NextResponse.json({
        message : "url does not start with http or https"},{status : 400})}
        

        try {
            new URL(url);
        } catch (error) {
            return NextResponse.json({
                message : "Enter valid Url "
            },{status : 400})
            
        }

        const shortUrl = nanoid(7)

        const newLink = await prisma.project.create({
            data : {
                originalUrl : url ,
                shortUrl : shortUrl,
            
            }
        })

        return NextResponse.json({
            message : "url shortned successful",
            data : newLink,
        },{status : 201})
        


    } catch (error) {
        console.log("post error",error)
        return NextResponse.json({
            message : "server error",
        },{status : 500}) 
        
    }
}