import { Post } from "@/lib/model"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET = async (request)=>{
    try {
       connectToDb() 
       const posts = await Post.find()
       return NextResponse.json(posts)
    } catch (error) {
        console.log(error)
        throw new ("failed to fetch posts!")
    }
}