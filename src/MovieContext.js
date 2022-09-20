import React, { createContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  return <MovieContext.Provider value={{}}>{children}</MovieContext.Provider>;
}

export default MovieContext;
