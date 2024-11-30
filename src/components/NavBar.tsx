'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b relative">
      <Link className="flex items-center space-x-2" href="#">
        <Image 
          src="/images/logo.png" 
          alt="QDash Logo" 
          width={32} 
          height={32} 
          className="object-contain"
        />
        <span className="text-2xl font-black tracking-tight font-outfit">QDash</span>
      </Link>
      <button 
        className="ml-auto md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>
      <nav className={`${
        isMenuOpen 
          ? 'absolute top-full left-0 right-0 bg-white border-b p-4 flex flex-col gap-4' 
          : 'hidden'
        } md:relative md:ml-auto md:flex md:flex-row md:gap-6 md:p-0 md:border-none`}>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
          How It Works
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
          Pricing
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#privacy">
          Privacy
        </Link>
      </nav>
    </header>
  )
}
