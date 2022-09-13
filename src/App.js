import React from "react";
import classes from "./App.module.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";

const App = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  let linkStyle = {
    backgroundColor: "rgb(238, 197, 144)",
    fontSize: "1.9rem",
    color: "rgb(17, 14, 11)",
    margin: "0 2rem",
  };
  let activeStyle = {
    backgroundColor: "rgb(238, 197, 144)",
    fontSize: "1.9rem",
    color: "rgb(68, 146, 80)",
    margin: "0 2rem",
  };
  return (
    <div>
      <Box className={classes.header}>
        <BottomNavigation
          style={{
            backgroundColor: "rgb(238, 197, 144)",
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <h4
            style={{
              fontSize: "2rem",
              cursor: "pointer",
              position: "absolute",
              left: "2rem",
            }}
            onClick={() => navigate("series")}
          >
            IMDb-API
          </h4>
          <NavLink
            to="movies"
            style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Movies
          </NavLink>
          <NavLink
            to="series"
            style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Series
          </NavLink>
        </BottomNavigation>
      </Box>
      <Routes>
        <Route path="movies" element={<h1>Naslov prve stranice</h1>} />
        <Route path="series" element={<h1>Ovo je naslov druge stranice</h1>} />
        {/* <Route path="team" element={<TeamPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
