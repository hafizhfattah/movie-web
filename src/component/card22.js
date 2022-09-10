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
          image="https://www.mnctrijaya.com/uploads/news/superpets.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DC League of Super-Pets
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Dalam “DC League of Super-Pets,” Krypto si Anjing-Super dan Superman
            adalah sahabat yang tak terpisahkan, berbagi kekuatan super yang
            sama dan memerangi kejahatan di Metropolis secara berdampingan.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack spacing={2} direction="row">
          <a
            href="https://www.febbox.com/share/jCwGrmTm"
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
