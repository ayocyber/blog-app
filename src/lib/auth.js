import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDb } from "./utils"
import { User } from "./model"
import bcrypt from "bcryptjs"
import { authConfig } from "./authconfig"


const login = async (credentials) =>{
    try {
        connectToDb()
        const user = await User.findOne({username: credentials.username})
        if(!user){
            throw new Error("User not found")
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
        if(!isPasswordCorrect){
            throw new Error("Wrong credentials")
        }
         
        return user
    } catch (error) {
        console.log(error)
        throw new Error("failed to login")
    }
}


export const { 
    handlers:{GET, POST}, 
    auth,
    signIn , 
    signOut }
     = NextAuth({ 
        ...authConfig,
    providers: [
         GitHub({
            clientId : process.env.GITHUB_ID, 
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            async authorize(credentials){
                try {
                    const user = await login(credentials)
                    return user
                } catch (error) {
                    return null
                }
            }
        })
         ],
    callbacks:{
       async signIn({user , account , profile}){
        console.log(user, account, profile)
        if(account.provider === "github"){
            connectToDb()
            try {
               const user  = await User.findOne({email:profile.email})
               if(!user){
                const newUser = new User({
                    username: profile.login,
                    email : profile.email,
                    image: profile.avatar_url
                })
                await newUser.save()
               } 
            } catch (error) {
                console.log(error)
                return false  
            }
        }
        return true
       },
       ...authConfig.callbacks,
    }
         })  