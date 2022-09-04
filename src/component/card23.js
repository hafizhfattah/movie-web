import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardDuatiga = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          className="thor"
          image="https://m.media-amazon.com/images/M/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fantastic Beasts: The Crimes of Grindelwald
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Film kedua dari seri Fantastic Beasts ini akan melanjutkan kisah
            Newt Scamander (Eddie Redmayne) untuk kembali menangkap Gellert
            Grindelwald (Johnny Depp) yang berhasil lolos dari penjara. Bersama
            Albus Dumbledore (Jude Law) Newt harus bisa menghentikan Grindelwald
            yang ingin menghancurkan tatanan dunia.{" "}
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

export default CardDuatiga;
