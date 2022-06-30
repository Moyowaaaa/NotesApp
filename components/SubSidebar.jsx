import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from "@fortawesome/free-regular-svg-icons";
import {  } from "@fortawesome/free-brands-svg-icons";
import {faNoteSticky, faEllipsis, faPlus} from "@fortawesome/free-solid-svg-icons";
import NotesCard from './NotesCard';
import {gql, useQuery} from '@apollo/client'
import { GET_NOTES } from '../graphql/queries'
import { SpinnerCircularFixed } from "spinners-react";
import Link from 'next/link';
import { useRouter } from 'next/router';



const SubSidebar = ({searchValue,preview, title, body, addNote}) => {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_NOTES);

  const [notes, setNotes] = useState();
  // const [preview,setPreview] = useState(true);

  useEffect(() => {
    setNotes(data);
  });

  // const togglePreview = () => {
  //   addNote(!preview);
  // }



  return (
    <div className={`${router.pathname !== '/notes' ? "hidden lg:flex" : ""} " h-screen border-r-2 w-full lg:w-3/12 flex flex-col  overflow-auto w-full lg:w-3/12 flex overflow-auto"` }>

      <div className='h-[90%]  w-11/12 m-auto :flex flex-col' >
        <h1 className='text-2xl font-semibold px-2'>My Notes</h1>

        {data ? ( 

        <div>
          

<p className='pt-6'>{data && data.notes.length} Note<span className={`${data?.notes.length > 1 || data?.notes.length == 0 ?"inline-flex":"hidden"}`}>s</span></p>

          <Link href='/newNote'>
        <div className='h-[3rem] mt-[1rem] flex items-center gap-4 bg-[grey] py-4 text-white px-2 cursor-pointer'>
        <FontAwesomeIcon icon={faPlus} width={25} className=' h-full' />
                <p>Add new note</p>

        </div>
        </Link>




        <div className='w-full mt-6'>

          <div className={`${preview ? "hidden":"block"} ${router.pathname === "/newNote" ? "block":"hidden"} w-full h-[8.4rem] flex flex-col items-start bor  shadow-md mb-4 gap-2 border-2 rounded-md px-2 cursor-pointer hover:shadow-2xl`}>
            <h1 className='my-4'>{title?.slice(0,35)}<span className={`${title?.length > 45 ? "inline-flex":"hidden"}`}>.......</span><span className={`${!title ? "flex":"hidden"}`}>Untitled Note</span></h1>
            <p className='mb-3' >{body?.slice(0,40)}<span className={`${body?.length > 40 ? "inline-flex":"hidden"}`}>.......</span></p>
            {/* <textarea className='w-full h-3/6 resize-none outline-none border-none p-2' value={title} >

            </textarea>
            <textarea className='w-full h-3/6 resize-none outline-none border-none p-2' value={body?.slice(0,45)} >

            </textarea>
    */}
   

            </div>




        {/* {data && data.notes.map(note => (
          <NotesCard key={note.id} note={note}/>
         )).reverse()} */}

         {data.notes.length > 0 ? ( 
          <div className=''>
              {data && data.notes?.filter((note) => {
            return note.title.toLowerCase()
            .includes(searchValue.toLowerCase())
          } 
          ).map(note => (
            <NotesCard key={note.id} note={note}/>
            )).reverse()}

            </div>

         ): ( 
          <div className={`${router.pathname === "/newNote" ? "hidden":""} 'border-blue border-[yellow] flex flex-col items-center justify-center'`}>

<p >You have no notes :(</p>

          </div>
      
         )}

        

       
        </div>
        </div>

        ) : (
          <div className={`w-full h-screen flex flex-col items-center justify-center ${router.pathname == "/[id]" ? "hidden":"block"}`}> <SpinnerCircularFixed
          enabled={true}
          secondaryColor="white"
          color="blue"
          speed="100"
          // className="h-[300px] w-[300px]"
          size="100"
        />
        </div> 
        )}
        


        </div>
      </div>
  )
}

export default SubSidebar