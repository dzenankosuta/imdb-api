import React, { createContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [stars, setStars] = useState(1);
  const increaseStars = () => {
    if (stars < 5) {
      setStars(stars + 1);
    }
  };
  const decreaseStars = () => {
    if (stars > 1) {
      setStars(stars - 1);
    }
  };
  return (
    <MovieContext.Provider value={{ stars, increaseStars, decreaseStars }}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
