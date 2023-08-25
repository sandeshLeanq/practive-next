"use client";
import React, { useEffect, useState } from "react";
import MovieContext, { MovieDataType } from "../globalContext/movieContext";
import axios from "axios";
import { endpoints } from "@/constants/endpoints";

type Props = { children: React.ReactNode };

const MovieProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviess, setMoviess] = useState<any>({});

  console.log("endpoints", endpoints.movies);

  const getMovies = async (endpoints: any) => {
    try {
      await axios.get(endpoints.movies).then((res) => {
        setMoviess(res.data);
      });
    } catch (err) {
      console.log("error: ", err);
    }
  };
  console.log("moviess", moviess);

  useEffect(() => {
    getMovies(endpoints);
  }, []);

  const MovieValue: MovieDataType = {
    isLoading,
    moviess:moviess,
  };

  return (
    <MovieContext.Provider value={MovieValue}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
