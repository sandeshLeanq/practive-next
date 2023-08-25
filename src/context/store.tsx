import React from "react";
import MovieProvider from "./provider/movieProvider";

type Props = { children: React.ReactNode };

const AppWrapper = ({ children }: Props) => {
  return (
    <MovieProvider>
      {children}
    </MovieProvider>
  );
};

export default AppWrapper;
