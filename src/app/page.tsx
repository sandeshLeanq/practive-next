"use client";
import React, { useContext, useState } from 'react'
import MovieList from "@/components/common/movieItem";
import styles from "./page.module.css";
import MovieContext from '@/context/globalContext/movieContext';
import { MovieType } from '@/types/movie-type';
import Header from '@/components/common/header';

export default function Home() {
  const {moviess} = useContext(MovieContext)

  let newMovies = [];

  if(moviess.Search) {
     newMovies = moviess.Search.map((movie:MovieType) => {
      return <MovieList {...movie} />
    })
  }



  return(
    <main className={styles.main}>
      <Header/>
        <div className="grid grid-cols-4 gap-6">
          {
            newMovies
          }
        </div>
    </main>
  )
}
