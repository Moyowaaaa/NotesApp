import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import {  } from "@fortawesome/free-brands-svg-icons";
import {faNoteSticky, faEllipsis, faPlus} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from 'next/router';


const Folders = () => {
  const router = useRouter();
  
  return (
    <div className='h-5/6 py-6'>
        <div className='h-full '>


            <div className='flex h-[3.2rem] border-2 rounded-md gap-4 items-center justify-evenly  mb-2 hover:shadow-2xl'>

            <Link href='/notes'>
                <div className='w-10/12 flex h-full gap-4 items-center px-2 cursor-pointer justify-center' >
                <FontAwesomeIcon icon={faNoteSticky} width={25} className=' h-full' />
                <p>Notes</p>
                </div>
                </Link>

                
                {/* <div className='w-2/12'>
                <FontAwesomeIcon icon={faEllipsis} width={20} />
                </div> */}
            </div>



            {/* <div className='flex h-[3.2rem] mt-6 items-center gap-4 border-2 border-[blue] px-2'>
                <FontAwesomeIcon icon={faPlus} width={25} className=' h-full' />
                <p>Add new folder</p>

            </div> */}

<Link href='/todo'>
                <div className=' flex my-4 gap-4 items-center cursor-pointer h-[3.2rem] border-2 rounded-md gap-4 items-center  mb-2 hover:shadow-2xl justify-center' >
                <FontAwesomeIcon icon={faCheckCircle} width={25} className=' h-full' />
                <p>Todos</p>
                </div>
                </Link>


            


        </div>
    </div>
  )
}

export default Folders