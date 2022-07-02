
import React, {useEffect, useState} from 'react'
import SideBar from '../components/SideBar'
import SubSidebar from '../components/SubSidebar'
import { useRouter } from "next/router";
// const { query } = useRouter();
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesRight, faTrash,faCheck} from "@fortawesome/free-solid-svg-icons";
import { SpinnerCircularFixed } from "spinners-react";
import Link from 'next/link';
import {gql, useQuery, useMutation} from '@apollo/client'
import { CREATE_TODO,DELETE_TODO } from '../graphql/mutations';
import { GET_TODOS } from '../graphql/queries';
import TodoCard from '../components/TodoCard';
import MobileNav from '../components/MobileNav';






const Todo = () => {
    const router = useRouter();
    const [text,setText] = useState('');

    //getTodos
    const { data, loading, error } = useQuery(GET_TODOS);

    const [createTodo] = useMutation(CREATE_TODO , {
        variables:{
            text
        },
        refetchQueries:[{query:GET_TODOS}]
    }
        );

        const addTodo = () => {
            createTodo();
           router.reload()
        }

    
    
    
  return (
    <div>
        <div className='flex'>
            <MobileNav />

            <SideBar />

            {/* <SubSidebar /> */}


            <div className='w-full   h-full flex justify-center flex-col  items-center '>
                <h1 className='text-2xl font-bold mt-[4rem] pb-6'>Todos</h1>

                <div className='w-11/12 lg:w-5/12 '>
                  <input type="text" className='w-full mb-6 py-4 p-2 border-2 border-gray-600' placeholder='Add Todo' value={text} onChange={(e) => setText(e.target.value)} />
                  
            
                </div>
                
                <button className='border-2 border-[blue]   my-4 px-4 rounded-full bg-[blue] text-white h-8 flex items-center justify-center'>
                <FontAwesomeIcon icon={faCheck} width={20} height={20} className='h-full ' />
                </button>

                <div className=' w-11/12 lg:w-5/12 flex flex-col'>

                {data && data.todos.map(todo => (
                  
                  <TodoCard key={todo.id} todo={todo} />
              )).reverse() } 


                </div>

                {/* <div className='cursor-pointer flex items-center mb-6 gap-2 bg-white border-2 px-4 py-2 w-12 rounded-full bg-[blue] text-white outline-none border-none cursor-pointer' onClick={addTodo}>

          <FontAwesomeIcon icon={faCheck} width={20} height={20} className='h-full ' />
        </div> 

                {data && data.todos.map(todo => (
                  
                    <TodoCard key={todo.id} todo={todo} />
                )).reverse() } */}

            
              
            </div>
        </div>

    </div>
  )
}

export default Todo