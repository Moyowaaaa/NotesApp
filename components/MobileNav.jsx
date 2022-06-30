import React,{useEffect, useState} from 'react'


import Link from 'next/link'
import Router from 'next/router'
import { useRouter } from "next/router";


const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const router = useRouter();

    const closeMenu = () => {
      setOpenMenu(false)
    }

  return (
    <div className='lg:hidden z-50 bg-[black] text-[blue]'>
        
        
    {openMenu ?  <button className="top-6 right-10 fixed z-50 text-4xl " onClick={() => setOpenMenu(!openMenu)}> &#9776;</button>:
      "" }

<button className="top-6 right-10 fixed z-50 text-4xl" onClick={() => setOpenMenu(!openMenu)}> &#9776;</button>

<div className={`"top-0 right-0 fixed text-black bg-[white] shadow-lg h-full w-screen z-50 ease-in-out duration-700 " ${openMenu ? " translate-x-0" : " translate-x-full"} `}>
<button className='top-6 right-12 fixed z-50 text-2xl' onClick={closeMenu}>X</button>



<div className='w-full h-4/6'>
  <div className=' flex flex-col h-full items-center justify-center gap-8' >
    <Link href='/' >
      <p onClick={closeMenu}>home</p>
    </Link>

  <Link href ="/notes">
  <p onClick={closeMenu}>Notes</p>
  </Link>


  <Link href="/todo">
       <p onClick={closeMenu} className='hover:border-b-2 border-[blue]'>Todos</p>
  </Link>


  </div>

  </div>

  </div>

    </div>
  )
}

export default MobileNav