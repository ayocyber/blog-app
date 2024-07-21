import Link from "next/link"
import styles from "./Postcard.module.css"

const PostCard = ({post}) => {
  console.log(post)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
     {  post.img && <div className={styles.corr} >
         <img src={post.img} className={styles.imgContainer}/>
        </div>}
        <span className={styles.date}>May 14 2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>READ MORE</Link>
      </div>
    </div>
  )
}
export default PostCard