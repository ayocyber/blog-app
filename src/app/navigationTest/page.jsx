"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"


const NavigationTestpage = () => {
    const Router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get("q")

    console.log(q)

    function handlechange(){
        console.log("clicked")
        Router.push("/")

    }
  return (
    <div>
        <Link href="/"prefetch={false} >Click here</Link>
        <button onClick={handlechange}>write and redirect</button>
    </div>
  )
}

export default NavigationTestpage
