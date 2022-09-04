import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardDuadua = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://m.media-amazon.com/images/M/MV5BN2ZmYTlhNmMtODQ0OS00YWNiLWI1MmMtNzkwYWMzOGM4YWQxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Black Adam
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Black Adam adalah film adiwira Amerika Serikat mendatang yang
            didasarkan dari watak DC Comics bernama sama. Film ini diproduksi
            oleh DC Films, New Line Cinema, Seven Bucks Productions, dan
            FlynnPictureCo., serta didistribusikan oleh Warner Bros. Pictures.
            Film ini diniatkan sebagai sempalan dari Shazam!{" "}
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

export default CardDuadua;
