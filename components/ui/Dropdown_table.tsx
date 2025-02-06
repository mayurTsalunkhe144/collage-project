import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './dropdown-menu'; // Corrected import path
import Image from 'next/image';
import { DropDownMenu_logo } from '../../constants/utils'; // Import the logo constant

const Dropdown_table = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className='invert'>
                <Image
                    
                    alt='menu'
                    src={DropDownMenu_logo} // Use the constant for the image source
                    width={20}
                    height={20}
                />
                </div>
                
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Dropdown_table;
