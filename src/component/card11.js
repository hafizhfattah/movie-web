import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardSebelas = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://cdn1-production-images-kly.akamaized.net/bjubF9HccDrm6GsiDp59ngcysCs=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3962311/original/077954600_1647257519-the_adam.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Adam Project
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The Adam Project adalah film petualangan fiksi ilmiah Amerika
            Serikat tahun 2022. Film ini diproduksi bersama oleh Skydance Media,
            Maximum Effort dan 21 Laps Entertainment, disutradarai oleh Shawn
            Levy dari skenario yang ditulis oleh Jonathan Tropper, T.S. Nowlin,
            Jennifer Flackett dan Mark Levin
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

export default CardSebelas;
