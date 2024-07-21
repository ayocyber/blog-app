
import PostCard from "@/components/PostCard/postCard"
import styles from "./blog.module.css"
import React from "react"
import { getPost, getPosts } from "@/lib/data"

const getData = async () =>{
  const res =  await fetch("http://localhost:3000/api/blog", {cache: "no-store"})
  if(!res.ok){
    throw new Error("Something went wrong")
  }
  return res.json()
}

const BlogPages = async () => {
  const posts = await getData()
  // const posts = await getPosts()
  
  return (
    <div className={styles.container}>
      {posts.map((post)=>{
        return(
          <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
        )
      })}
  
    </div>
  )
}

export default BlogPages
