import React from 'react'
import {  } from "@fortawesome/free-regular-svg-icons";
import {  } from "@fortawesome/free-brands-svg-icons";
import {faFilePen} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HomeNotes = ({note}) => {
  return (
    <>
    <Link href='/[id]' as={`/${note.id}`}>

    <div className='h-[16rem] mr-[5px] shadow-md w-[12rem] rounded-md mt-2 bg-white text-black cursor-pointer hover:shadow-2xl'>
        <div className="pt-2 px-2">
            <h2>{note.title}</h2>
        </div>

        <div className='pt-6 px-2'>
       
          <p>{note.body.slice(0,80).trim()} <span className={`${note.body.length > 80 ? "inline-flex":"hidden"}`}>....</span></p>
          {/* {note.body.length > 100 ? note.body.substring(0, 100) + '...' : note.content} */}
        </div>
        
    </div>
    </Link>

    </>
  )
}

export default HomeNotes