import React from "react";
import classes from "./App.module.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Movies from "./components/pages/Movies/Movies";
import Series from "./components/pages/Series/Series";
import OneTitleMovie from "./components/pages/HomePage/OneTitleMovie";
import { MovieProvider } from "./MovieContext";

const App = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  let linkStyle = {
    backgroundColor: "rgb(28, 35, 49)",
    color: "#ffffff",
  };
  let activeStyle = {
    backgroundColor: "rgba(78, 96, 134, 0.5)",
    color: "#c0f3ff",
  };
  return (
    <div>
      <MovieProvider>
        <Box className={classes.header}>
          <BottomNavigation
            style={{
              backgroundColor: "rgb(28, 35, 49)",
            }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <h4
              style={{
                color: "#ffffff",
                fontSize: "2rem",
                cursor: "pointer",
                position: "absolute",
                left: "2rem",
              }}
              onClick={() => navigate("/")}
            >
              IMDb-API
            </h4>
            <NavLink
              to="movies"
              className={classes.linkcss}
              style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
            >
              MOVIES
            </NavLink>
            <NavLink
              to="series"
              className={classes.linkcss}
              style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
            >
              SERIES
            </NavLink>
          </BottomNavigation>
        </Box>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<OneTitleMovie />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<OneTitleMovie />} />
          <Route path="series" element={<Series />} />
          <Route path="series/:id" element={<OneTitleMovie />} />
        </Routes>

        <Box className={classes.footer}>
          <BottomNavigation
            style={{
              backgroundColor: "rgb(238, 197, 144)",
            }}
          >
            <h4 className={classes.footertext}>
              2022 <em>Copyright</em> Dženan Košuta
            </h4>
          </BottomNavigation>
        </Box>
      </MovieProvider>
    </div>
  );
};

export default App;
