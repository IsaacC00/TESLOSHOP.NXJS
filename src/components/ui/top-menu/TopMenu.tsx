'use client';

import Link from 'next/link'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
import { titleFont } from '@/config/fonts'
import { useUIStore } from '@/store';


export const TopMenu = () => {
  const openSideMenu = useUIStore(state => state.openSideMenu);

  return (
    <nav className='flex px-5 justify-between items-center w-full'>
      {/* LOGO */}
      <div>
        <Link href='/' >
          <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
          <span> | Shop</span>
        </Link>
      </div>
      {/* Center Menu */}
      <div className='hidden sm:block'>
        <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 ' href={'/category/men'}>Hombres</Link>
        <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 ' href={'/category/women'}>Mujeres</Link>
        <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 ' href={'/category/kid'}>Ninos</Link>
      </div>

      {/* Serach, Cart, Others */}
      <div className='flex items-center'>

        <Link href={'/search'} className='mx-2'>
          <IoSearchOutline className='h-5 w-5' />
        </Link>

        <Link href={'/search'} className='mx-2'>
          <div className='relative'>
            <span className='absolute text-xs rounded-full px-1 font-bold bg-blue-700 text-white -top-2 -right-2'>
              2
            </span>
            <IoCartOutline className='h-5 w-5' />
          </div>
        </Link>

        <button
          onClick={openSideMenu}
          className='p-2 m-2 rounded-md transition-all hover:bg-gray-100'
        >
          Menu
        </button>

      </div>
    </nav>
  )
}
