"use client";
import { MovieType } from '@/types/movie-type';
import React, { useContext } from 'react'

export default function MovieList(props:MovieType) {
  return (
      <div className='border p-6 group hover:bg-slate-100 text-center'>
        <img className='group-hover:scale-105 transform m-auto' src={props.Poster} alt="poster" height='170' />
        <h2 className='pt-4 text-2xl group-hover:text-green-700'>{props.Title}</h2>
      </div>
  )
}
