"use server"
import { revalidatePath } from "next/cache"
import { Post, User } from "./model"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth"
import bcrypt from "bcryptjs"

export const addPost = async  (prevState, formData)=>{
    const {title , desc , slug, userId} = Object.fromEntries(formData)
    console.log(title , desc , slug , userId)
    try {
        connectToDb()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })
        await newPost.save()
        revalidatePath("/blog")
        revalidatePath("/admin")
        console.log("SAVED TO DB")
    } catch (error) {
     return  {error: "something went wrong"}
    }
}
export const deletePost = async (formData)=>{
    const {id} = Object.fromEntries(formData)
    try {
        connectToDb()
        await Post.findByIdAndDelete(id)
        revalidatePath("/blog")
        revalidatePath("/admin")
        console.log("deletefrom db")
    } catch (error) {
     return  {error: "something went wrong"}
    }
}

export const addUser = async  (prevState, formData)=>{
    const {username, email , password, img,} = Object.fromEntries(formData)
    try {
        connectToDb()
        const newUser = new User({
            username, email , password, img
        })
        await newUser.save()
        revalidatePath("/admin")
        console.log("SAVED TO DB")
    } catch (error) {
     return  {error: "something went wrong"}
    }
}
export const deleteUser = async (formData)=>{
    const {id} = Object.fromEntries(formData)
    try {
        connectToDb()
        await Post.deleteMany({ userId:id })
        await User.findByIdAndDelete(id)
        revalidatePath("/admin")
        console.log("deletefrom db")
    } catch (error) {
     return  {error: "something went wrong"}
    }
}


export const handleGithubLogin =async()=>{
    "use server"
    await signIn("github")
    }
export const HandleLogout = async () =>{
    "use server"
    await signOut()
}

export const register = async (previousState, formData) =>{
    const {username , email, password,img , passwordRepeat} = Object.fromEntries(formData)

    if(password !== passwordRepeat){
        // return "Password do not match"
        return {error:"Passswords do not match"}
    }
 
    try {
        connectToDb()
        const user = await User.findOne({username})
        if(user){
            return{error: "Username already exists"}
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password , salt)
        const newUser = new User({
            username,
            email,
            password : hashPassword,
            img
        })
        await newUser.save()
        console.log("saved to db")

        return {success: true}
    } catch (error) {
        console.log(error)
        return {error : "Something went wrong"}
    }
}
export const login = async (previousState, formData) =>{
    const {username, password} = Object.fromEntries(formData)
    try {
    await  signIn("credentials", {username, password})
    } catch (error) {
        console.log(error)
        if(error.message.includes("CredentialsSignin")){
            return {error : "Invalid username or password"}
        }
       throw error
    }
}