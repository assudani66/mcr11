
import TextInput from '@/components/UI/input'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between p-4'>
            <p className='text-3xl text-bold'>IMDB</p>
            <TextInput placeholder='Search movies by title,cast and director... ' />
            <div className='flex space-x-8'>
                <Link href={'/'}>Movies</Link>
                <Link href={'/wishlist'}>Watch List</Link>
                <Link href={'/fav'}>Starred Movies</Link>
            </div>
        </div>
    )
}

export default Navbar