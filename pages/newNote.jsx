import React, {useEffect, useState} from 'react'
import SideBar from '../components/SideBar'
import SubSidebar from '../components/SubSidebar'
import { useRouter } from 'next/router'
import {gql, useQuery, useMutation } from '@apollo/client'
import { GET_NOTES, DELETE_NOTE } from '../graphql/queries'
import { CREATE_NOTE } from '../graphql/mutations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesRight, faTrash,faCheck} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'



import dynamic from 'next/dynamic'
import MobileNav from '../components/MobileNav'


const NewNote = () => {
  const router = useRouter();



    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

    const [text,setText] = useState('')
    const [preview,setPreview] = useState('')
    const [editor,setEditor] = useState('')
    const [editorState,setEditorState] = useState('')





    const [searchValue, setSearchValue] = useState('')

    const search = (e) => {
      setSearchValue(e.target.value)
    }

    // const TextEditor  = dynamic(() => import('../components/TextEditor'), {
    //   ssr: false
    // }
    // )
    

 
  
  

    const { data, loading, error } = useQuery(GET_NOTES);

    const [addNote] = useMutation(CREATE_NOTE, {
        variables:{title, body},
        refetchQueries:[{query:GET_NOTES}]

        
    })

    const createNote = () => {
        addNote();
        
        setPreview(true)
        router.push('/notes');
    }

    // const childToParent = (childata) => {
    //   setBody(childata)
    // }


    // console.log("This is body",body)



    

  return (
    <div className='flex w-full '>
      <MobileNav />

          <SideBar search={search}/>
      
      <SubSidebar searchValue={searchValue} title={title} body={body} preview={preview} createNote={createNote}/>

    <div className='w-full lg:w-7/12  overflow-hidden mt-[3.2rem] lg:mt-0'>

    <div className='flex-wrap lg:flex-nowrap gap-4 lg:gap-0 h-auto py-4 flex lg:justify-between px-4 border-b-2 overflow-hidden'>
      
        <p className='flex items-center gap-6 flex-wrap lg:flex-nowrap'>
          
        <Link href='/notes'>
          <span className='hover:cursor-pointer hover:border-b-2 border-b-[blue]'>My Notes</span>
          </Link>

          <FontAwesomeIcon icon={faAnglesRight} width={20} /> 


          <span className='hover:cursor-pointer hover:border-b-2 border-b-[blue]'>New Note</span>

             <FontAwesomeIcon icon={faAnglesRight} width={20} /> <span>{title.slice(0,40).trim()}</span><span className={`${title?.length > 40 ? "inline-flex":"hidden"}`}>.......</span> <span className={`${!title ? "flex":"hidden"}`}>Untitled Note</span> </p>
     


        <div className='cursor-pointer flex gap-2 bg-white border-2 px-4 py-2 rounded-md' onClick={createNote}>
            <p>Save</p>
          <FontAwesomeIcon icon={faCheck} width={15} className='h-full text-[green] ' />
        </div>
      </div>
        
    <div className='flex flex-col gap-4 mt-4   lg:h-auto   sticky'>
  

        <textarea className='p-2 h-1/6 text-2xl font-bold resize-none h-full w-full font-bold outline-none border-none border-b-2 border-b-[grey] ' placeholder='Title'    onChange={(e) => setTitle(e.target.value)}>

        </textarea>

        <textarea className='p-2 w-full text-justify h-[40rem] text-justify outline-none border-none resize-none border-b-2 border-b-[grey]' placeholder='Body'
        onChange={(e)=> setBody(e.target.value)}>

        </textarea>

        </div>
       

        {/* <div className='h-screen'>
        <TextEditor />
        </div> */}

   




    </div>
    </div>
  )
}

export default NewNote