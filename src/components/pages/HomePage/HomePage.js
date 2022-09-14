import React from "react";
import classes from "./HomePage.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CardWatch from "../../Card/CardWatch";

const HomePage = () => {
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
        <CardWatch image="" title="" description="" />
      </div>
    </>
  );
};

export default HomePage;
