import React from 'react'

const Search = ({search}) => {
  return (
    <div>
        <div className='h-[3rem] mt-4'>
            <input type="text" placeholder="Search notes..." className='w-full h-full  p-2'  onChange = {(e) => search(e)}/>
        </div>
    </div>
  )
}

export default Search