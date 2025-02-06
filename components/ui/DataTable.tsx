"use client"
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Dropdown_table from '@/components/ui/Dropdown_table';
import {Button} from '@/components/ui/button'

const Datatable = () => {
  const data = [
    {producctId:"123",productname: 'Shoes', customername: 'Jon Doe', status: 'Registerd'},
    {producctId:"1234",productname: 'Shoes1', customername: 'Jon Doe1', status: 'Registerd'},
    {producctId:"1235",productname: 'Shoes2', customername: 'Jon Doe2', status: 'Registerd'},
    {producctId:"1236",productname: 'Shoe3', customername: 'Jon Doe3', status: 'Registerd'},
    {producctId:"1237",productname: 'Shoe4', customername: 'Jon Doe4', status: 'Registerd'},
  ]
  return (
    <div>
     
      <Table className='border-separate border-spacing-y-3  border-gray-300'>
        <TableCaption>A list of your Registerd Products</TableCaption>
        <TableHeader className=''>
          <TableRow >
            <TableHead className="w-[100px]">Product ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="text-right mb-8"><Button className='bg-white text-dark-1 w-24 h-10 hover:text-white'>Add Product</Button></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          
            {
              data.map((item)=>(
                <TableRow onClick={()=>alert(item.producctId)} key={item.producctId} className='cursor-pointer mb-7'>
                <TableCell key={item.producctId} className="font-medium">{item.producctId}</TableCell>
                <TableCell>{item.productname}</TableCell>
                <TableCell>{item.customername}</TableCell>
                <TableCell className="">{item.status}</TableCell>
                <TableCell className="text-right">
                <Dropdown_table/>
                </TableCell>
                </TableRow>
              ))
            }
            
      

        </TableBody>
      </Table>

    </div>
  )
}

export default Datatable