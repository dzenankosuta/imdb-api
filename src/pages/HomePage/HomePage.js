import React, { useEffect, useState } from "react";
import classes from "./HomePage.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CardWatch from "../../components/Card/CardWatch";
import titleAPIs from "../../common/titleAPIs.json";

// const BASE_URL = "https://imdb-api.com";
// const API_KEY = "k_68sg5of3";  dzenan_kosuta@hotmail.com - dzenankosuta
// const API_KEY2 = "k_028a4s7l";  dzenan.kosuta14@gmail.com - dzenan.kosuta
// const API_KEY3 = "k_028a4s7l";  dzenisinedz@gmail.com - dzenispepic
// const API_KEY4 = "k_t3p1kco1";  - dzemildupljak dzenoimdb-api

const HomePage = () => {
  const [input, setInput] = useState("");
  const [showed, setShowed] = useState([]);
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
    setShowed(titleAPIs.results);
    // console.log(showed);
  };
  const filtered = showed.filter((movie) =>
    movie.title.toLowerCase().includes(input)
  );
  useEffect(() => {
    getMovies();
  }, [showed]);
  return (
    <div className={classes.body}>
      <div className={classes.search}>
        <Box
          // component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch", textAlign: "center" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ width: "22rem" }}
            id="outlined-basic"
            label="Search by Title"
            variant="outlined"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setInput("");
              }
            }}
          />
        </Box>
      </div>
      <div className={classes.cards}>
        {filtered.length > 0
          ? filtered
              .map((movie) => (
                <CardWatch
                  key={movie.id}
                  id={movie.id}
                  image={movie.image}
                  title={movie.title}
                  description={movie.description}
                />
              ))
              .slice(0, 3)
          : showed
              .map((movie) => (
                <CardWatch
                  key={movie.id}
                  id={movie.id}
                  image={movie.image}
                  title={movie.title}
                  description={movie.description}
                />
              ))
              .slice(0, 3)}
        {/* {showed
          .map((movie) => (
            <CardWatch
              key={movie.id}
              image={movie.image}
              title={movie.title}
              description={movie.description}
            />
          ))
          .slice(0, 3)} */}
      </div>
    </div>
  );
};

export default HomePage;
