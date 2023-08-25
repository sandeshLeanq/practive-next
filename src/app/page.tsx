"use client";
import React, { useContext, useState } from 'react'
import MovieList from "@/components/common/movieItem";
import styles from "./page.module.css";
import MovieContext from '@/context/globalContext/movieContext';
import { MovieType } from '@/types/movie-type';
import Header from '@/components/common/header';
import Search from '@/components/common/search';

export default function Home() {
  const {moviess} = useContext(MovieContext)
  console.log(moviess.Search);
  
  let newMovies = [];

  if(moviess.Response === "True") {
     newMovies = moviess.Search.map((movie:MovieType) => {
      return <MovieList key={movie.Year} {...movie} />
    })
  }

  return(
    <main className={styles.main}>
      <div className="px-14 pb-10 w-full flex items-center justify-between">
        <Header/>
        <Search/>
      </div>
        <div className="grid grid-cols-4 gap-6">
          {
            newMovies
          }
        </div>
    </main>
  )
}
