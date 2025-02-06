"use client";



import { useUser } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const Home = () => {
  const {user}=useUser();
  return (
    <div>

    </div>
  )
}

export default Home