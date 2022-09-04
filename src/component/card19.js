import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardSembilanbelas = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn.antaranews.com/cache/800x533/2022/03/11/main_pc.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jujutsu Kaisen 0
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Yuta Okkotsu adalah seorang siswa SMA penyendiri yang mengalami
            masalah besar—teman masa kecilnya, Rika telah menjelma menjadi roh
            kutukan yang enggan lepas darinya.
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

export default CardSembilanbelas;
