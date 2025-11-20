
import { nanoid } from "nanoid";
import next from "next";
import { NextResponse } from "next/server";
import Url from '@/lib/models/schema'
import {connectDb} from '@/lib/mongodb'



export async function POST(req : Request){
    try {
        await connectDb ();
       
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

        const newUrl = await Url.create({
            
                originalUrl : url ,
                shortUrl : shortUrl,
            
            
        })

        return NextResponse.json({
            message : "url shortned successful",
            data : newUrl,
        },{status : 201})
        


    } catch (error) {
        console.log("post error",error)
        return NextResponse.json({
            message : "server error",
        },{status : 500}) 
        
    }
}