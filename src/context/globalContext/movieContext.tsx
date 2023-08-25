"use client";
import React, { createContext } from "react";

export interface MovieDataType {
  isLoading: boolean;
  moviess: any;
}
const MovieStateContext = {
  isLoading: true,
  moviess: [],
};

const MovieContext = React.createContext<MovieDataType>(MovieStateContext);
export default MovieContext;
