import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuOptions=[
    {
        name:'Home', 
        path:'/',
    },
    {
        name:'Pricing',
        path:'/pricing'
    },
    {
        name:'Contact Us',
        path:'/contact-us'
    }

]
function Header() {
  return (
    <div className='flex justify-between items-center p-4'>
        <div className='flex gap-2-center'>
            <Image src={'/logo.svg'} alt='logo' width={50} height={50}/>
            <h2 className='font-bold text-2xl pl-1'>AI Trip Planner</h2>
        </div>
        <div className='flex gap-8 items-center'>
            {menuOptions.map((menu, index) => (
                <Link href={menu.path}>
                    <h2 className='text-lg hover:scale-105 transition hover:text-primary'>{menu.name}</h2>
                </Link>
                
            ))}
        </div>
        <Button>Get Started</Button>
    </div>
  )
}

export default Header