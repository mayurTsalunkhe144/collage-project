import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Root = () => {
  return (
    <div className='flex flex-col flex-1 justify-center text-white'>
        <Link href='/home'><Button>Click To sign-up</Button></Link>
    </div>
  )
} 

export default Root