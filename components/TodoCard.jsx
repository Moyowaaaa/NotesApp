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

        <div className='w-[20rem] lg:w-[30rem] my-2 bg-[blue] text-white h-[4.2rem] items-center py-2 px-6 flex justify-between'>
            <div>
            <p>{todo.text}</p>
            </div>


            <div onClick={deleteTodo}>
            <FontAwesomeIcon icon={faTrash}  width={15} className="text-[red] cursor-pointer" />
            </div>
        </div>

    </div>
  )
}

export default TodoCard