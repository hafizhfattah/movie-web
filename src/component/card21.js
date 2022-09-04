import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardDuasatu = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          thor="thor"
          image="https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Northman
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The Northman adalah film cerita seru sejarah epos yang disutradarai
            Robert Eggers serta ditulis Robert dan Sjón. Film ini dibintangi
            Alexander Skarsgård, Nicole Kidman, Anya Taylor-Joy, Björk, Ralph
            Ineson, Ethan Hawke, dan Willem Dafoe.{" "}
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

export default CardDuasatu;
