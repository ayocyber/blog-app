"use client"
import Link from "next/link"
import Links from "../Links"
import styles from "./Navlink.module.css"
import { usePathname } from "next/navigation"
const Navlink = ({item}) => {
    const pathName = usePathname()
  return (
    <div>
         <Link
             href={item.path}
            className={`${styles.container} ${pathName === item.path && styles.active}`}
             >
                {item.title}
            </Link>
    </div>
  )
}

export default Navlink
