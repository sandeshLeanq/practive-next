"use client";
import React, { useEffect, useState } from "react";
import MovieContext, { MovieDataType } from "../globalContext/movieContext";
import axios from "axios";
import { endpoints } from "@/constants/endpoints";

type Props = { children: React.ReactNode };

const MovieProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviess, setMoviess] = useState<any>({});
  const [query, setQuery] = useState<string>("")
  

  const getMovies = async () => {
    try {
      await axios.get(endpoints.movies).then((res) => {
        setMoviess(res.data);
        
      });
    } catch (err) {
      console.log("error: ", err);
    }
  };
  console.log(query.length);
  
  const handleSetquery = (value:string) => {
    setQuery(value)
  }

  useEffect(() => {
    getMovies();
    
  }, []);

  const searchMovie = async() => {
    try {
      await axios.get(endpoints.movieSearch(query)).then((res) => {
        setMoviess(res.data);
      });
    } catch (err) {
      console.log("error: ", err);
    }
  }

  // {query.length>0 ? 
  //   useEffect(() => {
  //   searchMovie();
  // }, [query])
  // : ""}


  if(query.length>0){
    useEffect(() => {
      searchMovie();
    }, [query]);
  }

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
