"use client";

import { sidebarlinks } from '@/constants';
import { cn } from '@/lib/utils';

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
  const pathname=usePathname();
  return (
    <section className='flex flex-col sticky bg-dark-1 h-screen w-fit justify-between left-0 top-0 p-6 pt-28  text-white'>
      <div className='flex flex-col flex-1 gap-6 p-6'> 
          {sidebarlinks.map((link)=>{
            const isActive=pathname===link.route || pathname.startsWith(`${link.route}/`);
            return (
              <Link 
              href={link.route}
              key={link.lable}
              className={cn("flex gap-4 items-center p-4 rounded-lg justify-center font-extrabold ",{
                'bg-blue-1':isActive})}
              >
                {link.lable}
              </Link>
            
            );
          })}
        
      </div>
  
    </section>
  )
}

export default Sidebar