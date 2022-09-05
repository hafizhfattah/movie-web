import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardSembilanbelas = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            avatar: the way of water
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Avatar 2 adalah sebuah film fiksi ilmiah epik Amerika Serikat yang
            disutradarai, produksi, dan ditulis oleh James Cameron. Film
            tersebut adalah film pertama dari empat sekuel yang direncanakan
            untuk filmnya Avatar.{" "}
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

export default CardSembilanbelas;
