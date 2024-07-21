"use client"
import Link from "next/link"
import styles from "./Links.module.css"
import Navlink from "./navlink/Navlink"
import { useState } from "react"
import { HandleLogout } from "@/lib/action"
import { auth } from "@/lib/auth"

const Links = ({session}) => {
    const links = [
        {
            title: "Homepage",
            path : "/"
        },
        {
            title : "About",
            path:"/about"
        },
        {
            title: "Contact",
            path:"/Contact"
        },
        {
            title:"Blog",
            path:"/blog"
        },
    ]

    const isadmin = true
    const [open , setOpen] = useState(false)
  return (
    <div>
    <div  className={styles.links}>
      {links.map((link)=>{
        return(
            <Navlink item={link} key={link.title}/>
        )
      })}{
        session?.user ? (
            <>
            {
               session.user.IsAdmin && (
                    <Navlink item={{title:"Admin", path:"/admin"}}/>
                )
            }
            <form action={HandleLogout}>
                <button className={styles.logout}>LogOut</button>
            </form>
            
            </>
        ) : (
            <Navlink item={{title: "Login" , path : "/login"}}/>
        )
      }
    </div>
    <form>

    </form>
    <button className={styles.menuButton} onClick={()=>setOpen(prev=> !prev)}>Menu</button>
    {
        open && (
            <div className={styles.mobileLinks}>
                {links.map((link)=>(
                    <Navlink item={link} key={link.title}/>
                ) )}
            </div>
        )
    }
    </div>
  )
}

export default Links
