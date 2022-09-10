import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CardLima = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://cdn1-production-images-kly.akamaized.net/W1hZ6EtofTwwgShg7Fp6AnOaPY8=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2752156/original/097349000_1552638820-avengers-endgame-official-poster.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Avengers: Endgame
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Melanjutkan Avengers Infinity War, dimana kejadian setelah Thanos
            berhasil mendapatkan semua infinity stones dan memusnahkan 50% semua
            mahluk hidup di alam semesta. Akankah para Avengers berhasil
            mengalahkan Thanos?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack spacing={2} direction="row">
          <a
            href="https://www.febbox.com/share/DNWrtSPt"
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

export default CardLima;
