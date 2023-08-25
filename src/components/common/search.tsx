import React, {useContext, useState} from 'react'
import MovieContext from '@/context/globalContext/movieContext'; 

export default function Search() {
    const {query, handleSetquery} = useContext(MovieContext)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        handleSetquery(e.target.value)
    }
  return (
    <div className='mb-6'>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input 
                className='border py-2 px-4 rounded-lg' 
                type='text' 
                placeholder='Search by movie title'
                value={query}
                onChange={handleChange}
            />
        </form>
    </div>
  )
}
