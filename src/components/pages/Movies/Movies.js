import React, { useEffect, useState } from "react";
import classes from "./Movies.module.css";
import CardWatch from "../../Card/CardWatch";
import movies from "../../../common/movies.json";
import Pagination from "@mui/material/Pagination";

// const BASE_URL = "https://imdb-api.com";

const Movies = () => {
  const [showed, setShowed] = useState([]);
  const numPages = Math.ceil(showed.length / 9);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };
  const moviesPerPage = 9;
  const numberOfMoviesVistited = (page - 1) * moviesPerPage;

  const getMovies = () => {
    // axios
    //   .get(`https://imdb-api.com/en/API/MostPopularTVs/k_t3p1kco1`)
    //   .then((res) => {
    //     setShowed(res.data.results);
    //     console.log(showed);
    //   });

    // axios.get("./titleAPIs.json").then((res) => {
    //   setShowed(res.data.results);
    // });
    setShowed(movies.items);
    console.log(showed);
  };
  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showed]);
  return (
    <div className={classes.body}>
      <div className={classes.cards}>
        {showed
          .map((movie) => (
            <CardWatch
              key={movie.id}
              id={movie.id}
              image={movie.image}
              title={movie.title}
              description={movie.crew}
            />
          ))
          .slice(
            numberOfMoviesVistited,
            numberOfMoviesVistited + moviesPerPage
          )}
      </div>
      <div className={classes.pagination}>
        <Pagination count={numPages} page={page} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Movies;
