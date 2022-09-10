import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardDua = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://lumiere-a.akamaihd.net/v1/images/dsitmom_poster_ph-sg-id_f0f15716.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Doctor Strange in the Multiverse of Madness
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Perjalananke tempat yang tidak diketahui bersama Doctor Strange,
            dengan bantuan sekutu mistis baik lama maupun baru, melintasi
            realitas alternatif Multiverse yang membingungkan dan berbahaya
            untuk menghadapi musuh baru yang misterius.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack spacing={2} direction="row">
          <a
            href="https://www.febbox.com/share/BwLlaT6H"
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

export default CardDua;
