import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuOptions = [
  { name: 'Home',       path: '/' },
  { name: 'Pricing',    path: '/pricing' },
  { name: 'Contact Us', path: '/contact-us' },
]

function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <h2 className="pl-1 text-2xl font-bold">AI Trip Planner</h2>
      </div>

      <div className="flex items-center gap-8 pr-24">
        {menuOptions.map((menu) => (
          <Link key={menu.path} href={menu.path}>
            <h2 className="text-lg transition hover:scale-105 hover:text-primary">
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <SignInButton mode='modal'>
        <Button>Get Started</Button>
      </SignInButton>
      
    </div>
  )
}

export default Header
