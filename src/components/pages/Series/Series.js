import React, { useEffect, useState } from "react";
import classes from "./Series.module.css";
import CardWatch from "../../Card/CardWatch";
import series from "../../../common/series.json";
import Pagination from "@mui/material/Pagination";

const BASE_URL = "https://imdb-api.com";
const API_KEY = "k_68sg5of3"; // dzenan_kosuta@hotmail.com - dzenankosuta
const API_KEY2 = "k_028a4s7l"; // dzenan.kosuta14@gmail.com - dzenan.kosuta
const API_KEY3 = "k_028a4s7l"; // dzenisinedz@gmail.com - dzenispepic
const API_KEY4 = "k_t3p1kco1"; // - dzemildupljak dzenoimdb-api

const Series = () => {
  const [showed, setShowed] = useState([]);
  const numPages = Math.ceil(showed.length / 9);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const seriesPerPage = 9;
  const numberOfSeriesVisited = (page - 1) * seriesPerPage;

  const getSeries = () => {
    // axios
    //   .get(`https://imdb-api.com/en/API/MostPopularTVs/k_t3p1kco1`)
    //   .then((res) => {
    //     setShowed(res.data.results);
    //     console.log(showed);
    //   });

    // axios.get("./titleAPIs.json").then((res) => {
    //   setShowed(res.data.results);
    // });
    setShowed(series.results);
    console.log(showed);
  };
  useEffect(() => {
    getSeries();
  }, [showed]);
  return (
    <div className={classes.body}>
      <div className={classes.cards}>
        {showed
          .map((serie) => (
            <CardWatch
              key={serie.id}
              id={serie.id}
              image={serie.image}
              title={serie.title}
              description={serie.description}
            />
          ))
          .slice(numberOfSeriesVisited, numberOfSeriesVisited + seriesPerPage)}
      </div>
      <div className={classes.pagination}>
        <Pagination count={numPages} page={page} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Series;
