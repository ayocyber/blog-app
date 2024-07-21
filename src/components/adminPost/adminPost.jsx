import { getPosts } from "@/lib/data"
import styles from "./adminPost.module.css"
import Image from "next/image"
import { deletePost } from "@/lib/action"

const AdminPost = async() => {
    const posts = await getPosts()

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map(post=>{
        return(
        <div className={styles.post} key={post.id}>
            <div className={styles.details}>
                <Image src={post.img || "/avatar2.jpg"} alt="" width={50} height={50}/>
                <span className={styles.postTitle}>{post.title}</span>
            </div>
            <form action={deletePost}>
                <input type="hidden" name="id" value={post.id}/>
                <button className={styles.postButton} >delete</button>
            </form>
        </div>
        )
      })}
    </div>
  )
}

export default AdminPost
