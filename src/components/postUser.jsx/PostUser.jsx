// const getData = async (userId) =>{
//     const res =  await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache : "no-store"})
//     if(!res.ok){
//       throw new Error("Something went wrong")
//     }
//     return res.json()

import { getuser, getusers } from "@/lib/data"
import styles from "./postuser.module.css"
const PostUser = async ({userId}) => {
    const user = await getuser(userId)
    console.log("this is user", user)
  return (
    <div className={styles.container}>
      <div>
            <img src={user?.img ? user?.img : "/avatar2.jpg"} className={styles.profile_img} />
          </div>
          <div>
            <p>Author</p>
            <span>{user?.username}</span>
          </div>
        
    </div>
  )
}

export default PostUser
