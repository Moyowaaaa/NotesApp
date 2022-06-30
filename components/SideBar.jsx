import React from 'react'
import Search from './Search'
import Folders from './Folders'
import Link from "next/link";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router';


const SideBar = ({search}) => {
  const router = useRouter();
  return (
    <div className='hidden w-2/12 h-screen lg:flex flex-col items-center border-r-2   '>


      <div className='h-[90%]  w-10/12 m-auto flex flex-col' >

      


        <Search search={search} />

        <div className={`${router.pathname === '/' ? "hidden":"block"}`}>
        <Link href='/'>
        <div className='flex h-[3.2rem] mt-6 items-center gap-4 border-2  px-2 cursor-pointer border-2 rounded-md hover:shadow-2xl justify-center'>

          <FontAwesomeIcon icon={faHome} width={25} className=' h-full' />
          <p>Home</p>
          </div>
        </Link>
        </div>

        <Folders />
      </div>


    </div>
  )
}

export default SideBar