import React,{useState,useEffect} from 'react'
import {gql, useQuery, useMutation} from '@apollo/client'
import { DELETE_NOTE,Update_NOTE } from '../graphql/mutations';
import { GET_NOTES, GET_SINGLE_NOTE } from '../graphql/queries';



const NoteForm = ({note, editNote}) => {

    const [value, setValue] = useState(note)


    const onChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }



  



  return (
    <div className='w-full h-full text-justify resize-none'>
{/*       
        <form 
        onSubmit={(e) => {
            e.preventDefault()
            action(value)
        }
        }
        >
            <textarea name="body" className='h-[30rem] w-full' onChange={handleChange} value={value.body} 
            spellCheck="false"
            />
            <button type="submit">Save</button>
        </form> */}

   

        
    </div>
  )
}

export default NoteForm