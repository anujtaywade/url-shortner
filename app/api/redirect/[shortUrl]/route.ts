    import { NextResponse } from "next/server";
    import { connectDb } from "@/lib/mongodb";
    import Url from "@/lib/models/schema";

    export async function GET(req: Request, { params }: { params: { shortUrl: string } }) {
    try {
        await connectDb();

        const { shortUrl } = await params;

        const record = await Url.findOne({ shortUrl });

        if (!record) {
        return NextResponse.json(
            { message: "URL not found" },
            { status: 404 }
        );
        }

        return NextResponse.redirect(record.originalUrl);
    } catch (error) {
        console.log("REDIRECT ERROR:", error);
        return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
        );
    }
    }
