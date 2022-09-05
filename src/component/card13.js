import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardTigabelas = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Uncharted
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nathan Drake direkrut oleh pemburu harta karun berpengalaman Victor
            Sullivan (Sully) untuk mengembalikan kekayaan yang dikumpulkan oleh
            Ferdinand Magellan dan hilang 500 tahun yang lalu oleh House of
            Moncada.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack spacing={2} direction="row">
          <a
            href="https://github.com/hafizhfattah"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="contained">Download</Button>
          </a>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default CardTigabelas;
