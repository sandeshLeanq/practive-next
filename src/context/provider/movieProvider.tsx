"use client";
import React, { useEffect, useState } from "react";
import MovieContext, { MovieDataType } from "../globalContext/movieContext";
import axios from "axios";
import { endpoints } from "@/constants/endpoints";

type Props = { children: React.ReactNode };

const MovieProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [moviess, setMoviess] = useState<any>({});
  const [query, setQuery] = useState<string>("titanic")
  

  const getMovies = async () => {
    try {
      await axios.get(endpoints.movies(query)).then((res) => {
        setMoviess(res.data);
        
      });
    } catch (Error) {
      console.log("error: ", Error);
    }
  };
  console.log(query.length);
  
  const handleSetquery = (value:string) => {
    setQuery(value)
  }

  useEffect(() => {
    const clearTime = setTimeout(()=>{
      getMovies();
      setIsLoading(true)
    },800)
    return () =>{
      clearTimeout(clearTime)
    }
  }, [query]);

  const MovieValue: MovieDataType = {
    isLoading,
    moviess:moviess,
    query,
    handleSetquery
  };

  return (
    <MovieContext.Provider value={MovieValue}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
