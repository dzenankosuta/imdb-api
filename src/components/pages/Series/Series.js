import React, { useEffect, useState } from "react";
import classes from "./Series.module.css";
import CardWatch from "../../Card/CardWatch";
import series from "../../../common/series.json";
import Pagination from "@mui/material/Pagination";

const BASE_URL = "https://imdb-api.com";

const Series = () => {
  const [showed, setShowed] = useState([]);
  const numPages = Math.ceil(showed.length / 9);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
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
    setShowed(series.items);
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
              description={serie.crew}
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
