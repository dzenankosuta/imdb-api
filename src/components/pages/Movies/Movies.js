import React, { useEffect, useState } from "react";
import classes from "./HomePage.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CardWatch from "../../Card/CardWatch";
import axios from "axios";

const BASE_URL = "https://imdb-api.com";
const API_KEY = "k_68sg5of3";
const API_KEY2 = "k_028a4s7l";

const Movies = () => {
  const [showed, setShowed] = useState([]);
  const getMovies = () => {
    axios
      .get(`https://imdb-api.com/en/API/MostPopularTVs/k_028a4s7l`)
      .then((res) => {
        setShowed(res.data.results);
        console.log(showed);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <div className={classes.search}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch", textAlign: "center" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Search by Title"
            variant="outlined"
          />
        </Box>
      </div>
      <div className={classes.cards}>
        {/* {showed
          .map((movie) => (
            <CardWatch
              image={movie.results[0].image}
              title={movie.results[0].title}
              description={movie.results[0].description}
            />
          ))
          .slice(0, 3)} */}
        <CardWatch image="" title="" description="" />
      </div>
    </>
  );
};

export default Movies;
