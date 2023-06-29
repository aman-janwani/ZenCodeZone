import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-[20px] py-[10px]'>
        <Image src="https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Frame%204.png?alt=media&token=e100a405-f778-4af9-a0c7-4a92fa028baf" width={165} height={63} />
        <div>
            <button onClick={() => {
                window.location.href = '/home'
            }} className='px-[20px] py-[5px] rounded-lg bg-transparent border-2 border-amber-300 font-medium hover:bg-amber-500 text-white duration-300'>
                Go to app
            </button>
        </div>
    </div>
  )
}

export default Navbar