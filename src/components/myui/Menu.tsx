import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='flex gap-8'>
      <Link href="/">HOME</Link>
      <Link href="/">SERVICES</Link>
      <Link href="/">BLOG</Link>
      <Link href="/">PORTFOLIO</Link>
      <Link href="/">ABOUT</Link>
    </div>
  )
}

export default Menu