import React from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {gql, useQuery, useMutation} from '@apollo/client'
import { DELETE_NOTE } from '../graphql/mutations';
import { GET_NOTES } from '../graphql/queries';
import { useRouter } from "next/router";

const NotesCard = ({note}) => {
  const router = useRouter();

  const [deleteNote] = useMutation(DELETE_NOTE , {
    variables:{
      id: note.id
    },
    refetchQueries:[{query:GET_NOTES}]
    
  },

    );

  const removeNote = () => {
    deleteNote();
    router.push("/notes")
  
  }
  


  return (
    <div>

    <div className='h-[10.4rem] shadow-md mb-4 flex flex-col gap-2 border-2 rounded-md p-2 cursor-pointer hover:shadow-2xl'>

    <Link href='/[id]' as={`/${note.id}`}>
      <div>
      <div className='flex items-center justify-between'>

        <div> 
           {/* <small>20 APR</small> */}

<div className='h-2/6'>
<h2 className='font-bold'>{note.title}</h2>
</div>
</div>





      </div>
       
       
        <div className='h-3/6 pt-2'>
        <p>{note.body.slice(0,60).trim()} <span className={`${note.body.length > 80 ? "inline-flex":"hidden"}`}>....</span></p>
        </div>
        </div>
        </Link>


        <div className='h-1/6 flex justify-end pt-6'>

        {/* <small className='w-min py-2 px-4 bg-[grey]'>{note.tag}</small> */}
        <div onClick={removeNote}> <FontAwesomeIcon icon={faTrash} width={15} className="text-[red]" /></div>


        </div>
    </div>
  
    </div>
  )
}

export default NotesCard