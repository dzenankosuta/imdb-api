import React from "react";
import classes from "./HomePage.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
