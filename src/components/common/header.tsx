import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="text-center pb-10 flex items-center justify-center">
          <Link className="text-black text-5xl font-bold" href={"/"}>Search Your Favourite Movie</Link>
    </header>
  )
}
