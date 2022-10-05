import React, {useEffect, useState} from 'react'
import SideBar from '../../components/SideBar'
import SubSidebar from '../../components/SubSidebar'
import { useRouter } from "next/router";
// const { query } = useRouter();
import {gql, useQuery, useMutation} from '@apollo/client'
import { DELETE_NOTE,Update_NOTE } from '../../graphql/mutations';
import { GET_NOTES, GET_SINGLE_NOTE } from '../../graphql/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesRight, faTrash,faCheck} from "@fortawesome/free-solid-svg-icons";
import { SpinnerCircularFixed } from "spinners-react";
import Link from 'next/link';
import NoteForm from '../../components/NoteForm';
import MobileNav from '../../components/MobileNav';


const Note = () => {
  const router = useRouter();
  const { query } = useRouter();
  



  

  const [searchValue, setSearchValue] = useState('')

  const search = (e) => {
    setSearchValue(e.target.value)
  }


  
  
  const { data, loading, error } = useQuery(GET_SINGLE_NOTE, {
    variables: {
      id: query.id
    }
  });


  const [deleteNote] = useMutation(DELETE_NOTE , {
    variables:{
      id: query.id
    },
    refetchQueries:[{query:GET_NOTES}]
  }
    );

    const removeNote = () => {
      deleteNote();
      router.push('/notes');
    }

    const [value, setValue] = useState(data && data.note.body || '');
    const [title,setTitle] = useState(data && data.note.title || '');

    const [editNote] = useMutation(Update_NOTE, {
      variables: {
        id: query.id,
        body: value,
        title: title
      },
      refetchQueries: [{ query: GET_NOTES }]
    });
  

 
    

    




    //data check 

    useEffect(() => {
      if(!data){
        return;
      }
      setTitle(data.note.title);
      setValue(data.note.body || '');
    },[data])
  







  return (
    <div className='flex w-full '>

      <MobileNav />
     
      <SideBar search={search}/>
      
      <SubSidebar searchValue={searchValue}/>

    <div className='w-screen lg:w-7/12 h-screen overflow-hidden p-6'>
      <>
      {loading? (
         <div className='w-full h-screen flex flex-col items-center justify-center'> <SpinnerCircularFixed
         enabled={true}
         secondaryColor="white"
         color="blue"
         speed="150"
         // className="h-[300px] w-[300px]"
         size="150"
       />
       </div> 
      ): ( 

        

        <div>
          

      <div className='mt-[2rem] h-auto py-4 flex justify-between border-b-2 flex-wrap gap-4 lg:flex-nowrap  lg:mt-0 lg:gap-0'>
   
        <p className='flex items-center gap-2 '>
        <Link href='/notes'>
          <span className='hover:cursor-pointer hover:border-b-2 border-b-[blue]'>My Notes</span>
          </Link> 
        
         <FontAwesomeIcon icon={faAnglesRight} width={20} /> <span className='font-bold '>{data && data.note?.title}</span> 
         </p>
    


        <div className='cursor-pointer flex gap-4 pr-4' >
          <button className='flex items-center px-2 border-2 rounded-md py-2 gap-2' onClick={editNote}>
            <p>Save</p>
            <FontAwesomeIcon icon={faCheck} width={20} className="text-[green]" />
          </button>

          <button onClick={removeNote}>
          <FontAwesomeIcon icon={faTrash} width={15} className='h-full text-[red]' />
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-4 mt-4 justify-center h-[10rem] py-4 border-b-2 '>
   

        <textarea className='w-full h-4/6 text-3xl font-bold outline-none resize-none focus:border-2' value={title} onChange={(e) => setTitle(e.target.value)}></textarea>


        {/* <p>Created: </p> */}

        <div className={`${!data.note.tag ?"hidden":'flex  gap-4'}`}>
        <p>Tags:</p> 

        <div className='border-2  px-2 bg-[whitesmoke]'>
        {data.note.tag}
        </div>


        </div>
      
      </div>


      <div className='pt-4 text-justify'>

        <textarea className='w-full h-[30rem] text-justify outline-none resize-none focus:border-2 px-4 pt-2'
        spellCheck='false' 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      
        >
        </textarea>


        

      


      </div>

      </div>
      )}




      </>
    </div>
  
    </div>

  )
}



export default Note