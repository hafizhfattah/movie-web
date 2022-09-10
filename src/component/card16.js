import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardEnambelas = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://cdn0-production-images-kly.akamaized.net/Btf2_bdHvrxQ55AVr3t9SVvBdDg=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4032970/original/044471600_1653449986-MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Top Gun: Maverick
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lebih dari 30 tahun mengabdi sebagai salah satu penerbang Angkatan
            Laut terbaik, Pete “Maverick” Mitchell berada dalam posisi
            dambaannya, melakukan aksi-aksi mendobrak sebagai pilot uji nan
            pemberani, dan menampik setiap kesempatan naik pangkat karena akan
            membuatnya tak bisa menerbangkan pesawatnya.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack spacing={2} direction="row">
          <a
            href="https://www.febbox.com/share/FM1OD1qk"
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

export default CardEnambelas;
