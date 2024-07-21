import { Post } from "@/lib/model"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET = async (request, {params})=>{

    const {slug} = params

    try {
       connectToDb() 
       const posts = await Post.findOne({slug})
       return NextResponse.json(posts)
    } catch (error) {
        console.log(error)
        throw new ("failed to fetch posts!")
    }
}
export const DELETE = async (request, {params})=>{

    const {slug} = params

    try {
       connectToDb() 
       const posts = await Post.deleteOne({slug})
       return NextResponse.json("Post deleted")
    } catch (error) {
        console.log(error)
        throw new ("failed to delete posts!")
    }
}