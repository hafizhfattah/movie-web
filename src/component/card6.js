import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CardEnam = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://cdn-cas.orami.co.id/parenting/images/1_gQgf8Nu.width-800.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Spider-Man: No Way Home
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Identitas Spider-Man sekarang sudah terungkap, dan Peter meminta
            bantuan Doctor Strange. namun sebuah kesalahan terjadi, dan itu
            justru mengundang musuh berbahaya dari dunia lain, mereka mulai
            bermunculan. Hal itu memaksa Peter mencari apa makna sebenarnya
            menjadi Spider-Man.
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

export default CardEnam;
