import { Suspense } from "react"
import styles from "./adminpage.module.css"
import AdminPost from "@/components/adminPost/adminPost"
import AdminPostForm from "@/components/adminPostForm/adminPostForm"
import AdminUsers from "@/components/adminUsers/adminUsers"
import AdminUserForm from "@/components/adminUserForm/adminUserForm"
import { auth } from "@/lib/auth"

const AdminPages = async () => {
  const session = await auth()
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
            <AdminPost/>
        </div>
        <div className={styles.col}>
            <AdminPostForm userId={session.user.id}/>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
            <AdminUsers/>
        </div>
        <div className={styles.col}>
            <AdminUserForm/>
        </div>
      </div>
    </div>
  )
}

export default AdminPages
