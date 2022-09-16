import React, { useEffect, useState } from "react";
import classes from "./Movies.module.css";
import CardWatch from "../../Card/CardWatch";
import axios from "axios";
import movies from "./movies.json";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BASE_URL = "https://imdb-api.com";
const API_KEY = "k_68sg5of3"; // dzenan_kosuta@hotmail.com - dzenankosuta
const API_KEY2 = "k_028a4s7l"; // dzenan.kosuta14@gmail.com - dzenan.kosuta
const API_KEY3 = "k_028a4s7l"; // dzenisinedz@gmail.com - dzenispepic
const API_KEY4 = "k_t3p1kco1"; // - dzemildupljak dzenoimdb-api

const Movies = () => {
  const [input, setInput] = useState();
  const [showed, setShowed] = useState([]);
  const numPages = Math.ceil(showed.length / 9);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
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
    setShowed(movies.results);
    console.log(showed);
  };
  useEffect(() => {
    getMovies();
  }, [showed]);
  return (
    <div className={classes.body}>
      <div className={classes.cards}>
        {showed.map((movie) => (
          <CardWatch
            key={movie.id}
            image={movie.image}
            title={movie.title}
            description={movie.description}
          />
        ))}
      </div>
      <div className={classes.pagination}>
        <Pagination count={10} page={page} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Movies;
