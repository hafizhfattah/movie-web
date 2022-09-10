import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardDuapuluh = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Prey_2022_poster.png/220px-Prey_2022_poster.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Prey
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Diterjemahkan dari bahasa Inggris-Prey adalah film horor aksi fiksi
            ilmiah Amerika tahun 2022 berdasarkan waralaba Predator. Ini adalah
            angsuran kelima dan merupakan prekuel dari empat film pertama, yang
            berlatar di Northern Great Plains di Amerika Utara pada tahun 1719.
            Film ini disutradarai oleh Dan Trachtenberg dan ditulis oleh Patrick
            Aison.{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack spacing={2} direction="row">
          <a
            href="https://www.febbox.com/share/oLk5CS1D"
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

export default CardDuapuluh;
