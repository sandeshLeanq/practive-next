"use client";
import React, { createContext } from "react";

export interface MovieDataType {
  isLoading: boolean;
  moviess: any;
  query:string,
  handleSetquery:any
}
const MovieStateContext = {
  isLoading: true,
  moviess: [],
  query: " ",
  handleSetquery:()=>{{}}
};

const MovieContext = React.createContext<MovieDataType>(MovieStateContext);
export default MovieContext;
