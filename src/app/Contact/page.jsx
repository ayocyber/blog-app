"use client"
import React from "react"
import styles from "./contact.module.css"
import Hydrationtest from "@/components/hydrationtest"
import dynamic from "next/dynamic"

// const HydrationtestNoSSR = dynamic(()=>import("@/components/hydrationtest"), {ssr:false})
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="./form2.jpg"/>
      </div>
      <form>
        {/* <HydrationtestNoSSR/> */}
        <input type="text" placeholder="Name and SurName"/>
        <input type="email" placeholder="Email adress"/>
        <input type="number" placeholder="Phone Number (Optional)"/>
        <textarea placeholder="message" rows="30" cols="10"></textarea>
        <button>Send</button>
      </form>
    </div>
  )
}

export default ContactPage
