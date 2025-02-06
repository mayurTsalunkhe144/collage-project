import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import React, { ReactNode } from 'react'

const ProductsLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='relative text-white '>
    <Navbar/>
    <div className='flex '>
        <Sidebar/>
        <section className='flex min-h-screen flex-1 flex-col px-10 pb-6 pt-28 max-md:pb-14 sm:px-14'>
            <div className='w-full'>
                {children}
            </div>
        </section>

    </div>
</main>
  )
}

export default ProductsLayout