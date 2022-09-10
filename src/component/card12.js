import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardDuabelas = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://cdn0-production-images-kly.akamaized.net/cDhkUpzgRUch2bSBcVO8rQMqP94=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3894163/original/099647800_1641281552-MV5BYjlhNTA3Y2ItYjhiYi00NTBiLTg5MDMtZDJjMDZjNzVjNjJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Morbius
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ahli biokimia M ichael Morbius (Jared Leto) mencoba menyembuhkan
            dirinya sendiri dari penyakit darah langka, namun secara tidak
            sengaja ia menginfeksi tubuhnya dan berubah jadi mahluk yang
            menyerupai vampir.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack spacing={2} direction="row">
          <a
            href="https://www.febbox.com/share/LMrPqd3X"
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

export default CardDuabelas;
