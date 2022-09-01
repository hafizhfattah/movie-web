import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardEmpat = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/06/04/3296160147.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jurassic World Dominion
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Empat tahun setelah kehancuran pulau Nublar, dinosaurus sekarang
            hidup dan berburu bersama manusia di seluruh dunia. Keseimbangan
            yang rapuh ini akan menentukan, apakah manusia akan tetap menjadi
            berada di puncak rantai makanan ketika berbagi wilayah dengan
            makhluk paling menakutkan dalam sejarah bumi.
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

export default CardEmpat;
