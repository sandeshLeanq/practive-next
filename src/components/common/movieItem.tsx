"use client";
import { MovieType } from '@/types/movie-type';
import Image from 'next/image';
import React, { useContext } from 'react'

export default function MovieList(props:MovieType) {
  return (
    
      <div className='border p-6'>
        <img src={props.Poster} alt="poster" height='170' />
        <h2 className='pt-4 text-2xl'>{props.Title}</h2>
      </div>
  )
}
