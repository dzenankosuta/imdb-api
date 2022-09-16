import React from "react";
import classes from "./OneTitleMovie.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

const OneTitleMovie = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const movie_id = state.id;
  const image = state.image;
  const title = state.title;
  const description = state.description;
  return (
    <div className={classes.onemovie}>
      <Card sx={{ maxWidth: 750 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image={image}
            alt="logo"
            style={{ objectFit: "fill" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ID:{movie_id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default OneTitleMovie;