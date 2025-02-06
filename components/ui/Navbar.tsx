"use client"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const Navbar = () => {



  return (
    <nav className='flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 '>
      <Link href='/home' className='flex items-center gap-6'>
      <Image
      alt='logo'
      height={40}
      width={40}
      src='/favicon.ico'
      />
      <p className='text-[30px] font-bold'>CounterFiet Detection</p>
      </Link>
      
      {/* clerk user management */}
      <div>

      <SignedIn>
        <UserButton afterSwitchSessionUrl='/'/>
      </SignedIn>
      <SignedOut>
        
      </SignedOut>
      </div>
    </nav>
  )
}

export default Navbar