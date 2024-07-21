import Link from 'next/link'
import React from 'react'

const Notfound = () => {
  return (
    <div>
      <h2>Not found</h2>
      <p>Sorry, the page you are looking for does not exist</p>
      <Link href="/">return Home</Link>
    </div>
  )
}

export default Notfound
