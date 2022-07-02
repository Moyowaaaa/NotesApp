import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import { CREATE_TODO,DELETE_TODO } from '../graphql/mutations';
import {gql, useQuery, useMutation} from '@apollo/client'
import { GET_TODOS } from '../graphql/queries';

const TodoCard = ({todo}) => {

    const [deleteTodo] = useMutation(DELETE_TODO , {
        variables:{
            id: todo.id
        },
        refetchQueries:[{query:GET_TODOS}]
    }
        );


  return (
    <div>

 
        <div className='h-[3.2rem] w-12/12 py-2 px-4 mb-3 items-center flex text-white justify-between bg-[blue] '>
            <div>
            <p>{todo.text}</p>
            </div>


            <div onClick={deleteTodo}>
                <div>
            <FontAwesomeIcon icon={faTrash}  width={15} className="text-[red] cursor-pointer" />
            </div>
        </div>
        </div>

    </div>
  )
}

export default TodoCard