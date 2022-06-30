import React, {useEffect, useState} from 'react'
import SideBar from '../components/SideBar'
import SubSidebar from '../components/SubSidebar'
import {gql, useQuery} from '@apollo/client'
import { GET_NOTES } from '../graphql/queries'
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import empty from '../images/empty.jpg'
import nonEmpty from '../images/emp.jpg'
import { useRouter } from 'next/router'
import Image from 'next/image'
import MobileNav from '../components/MobileNav'




const Notes = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const [emptyState,setEmptyState] = useState('')
  const [noneEmptyState, SetNoneEmptyState] = useState()

  const search = (e) => {
    setSearchValue(e.target.value)
  }


  const {loading,error,data} = useQuery(GET_NOTES)


  


  




  return (
    <div className='flex w-full '>
      <MobileNav />

      <SideBar search={search}/>
      
      <SubSidebar searchValue={searchValue} />

      {/* <div className={`${data.notes.length ===0 ?"w-7/12 h-screen overflow-hidden image" :"hidden"}`}>
 

      </div> */}

      <div className='w-screen mt-[2rem] hidden h-screen lg:h-auto lg:w-7/12 flex flex-col items-center justify-center lg:block lg;mt-0'>

        <div className={`${data?.notes?.length ===0 ? "block":"hidden"}`}>
        <Image className='img' src={empty}  />
        </div>

        <div className={`${data?.notes?.length >0 ?"block":"hidden"}`}>
        <Image src={nonEmpty} className='img w-screen' />
        </div>
      </div>
      </div>
  )
}

export default Notes