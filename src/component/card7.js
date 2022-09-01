import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CardTujuh = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          className="thor"
          height="200"
          image="https://lumiere-a.akamaihd.net/v1/images/p_disney_lightyear_519_c4636841.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lightyear
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lightyear adalah film aksi fiksi ilmiah animasi komputer Amerika
            yang akan datang yang diproduksi oleh Pixar Animation Studios dan
            Walt Disney Pictures dan didistribusikan oleh Walt Disney Studios
            Motion Pictures
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

export default CardTujuh;
