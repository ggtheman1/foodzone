import { ShoppingCartIcon,  } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='flex justify-end '>
        <nav className='flex gap-3 w-full'>
            <Link href="/signin" className='flex text-primary header-button items-center font-bold'>
            Hello, Sign-In
            </Link>

            <Link href="/cart" className='header-button'>
            <div className='flex items-end '>
              <ShoppingCartIcon className='h-8 w-8'/>
            <span className='font-bold text-primary'>Cart</span>
            </div>
            </Link>
        </nav>
    </div>
  )
}

export default Menu;