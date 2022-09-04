import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardTujuhbelas = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://upload.wikimedia.org/wikipedia/en/0/09/The_Sea_Beast_film_poster.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Sea Beast
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Diterjemahkan dari bahasa Inggris-The Sea Beast adalah film
            petualangan animasi komputer tahun 2022 yang disutradarai oleh Chris
            Williams, yang ikut menulis skenario dengan Nell Benjamin dan
            diproduksi bersama Jed Schlanger. Film ini dibintangi oleh suara
            Karl Urban, Zaris-Angel Hator, Jared Harris, dan Marianne
            Jean-Baptiste.
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

export default CardTujuhbelas;
