import { getusers } from "@/lib/data"
import styles from "./adminUser.module.css"
import { deleteUser } from "@/lib/action"
import Image from "next/image"

const AdminUsers = async() => {
    const users = await getusers()
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map(user=>{
        return(
        <div className={styles.user} key={user.id}>
            <div className={styles.details}>
                <Image
                src={user.img || "/avatar2.jpg"}
                 alt="" 
                 width={50} 
                 height={50}
                 />
                <span>{user.username}</span>
            </div>
            <form action={deleteUser}>
                <input type="hidden" name="id" value={user.id}/>
                <button className={styles.userButton} >delete</button>
            </form>
        </div>
        )
      })}
    </div>
  )
}

export default AdminUsers
