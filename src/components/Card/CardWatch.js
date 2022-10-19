import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../../context/MovieContext";

const CardWatch = ({ image, title, description, id }) => {
  const navigate = useNavigate();
  const { stars } = useContext(MovieContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() =>
            navigate(`${id}`, {
              state: {
                id: id,
                image: image,
                title: title,
                description: description,
              },
            })
          }
        >
          Show more
        </Button>
      </CardActions>
      <Typography variant="body2" color="text.secondary">
        Rating: {stars}
      </Typography>
    </Card>
  );
};

export default CardWatch;
