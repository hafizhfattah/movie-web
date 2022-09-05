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
          image="https://m.media-amazon.com/images/M/MV5BZDM2YjA2ZjAtMmZmMy00NDhjLWJjYWYtYjc4ZGY0YzUzOTMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Man from Toronto
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The Man from Toronto adalah film komedi laga Amerika Serikat tahun
            2022 yang disutradarai Patrick Hughes dan dibintangi Kevin Hart,
            Woody Harrelson, Kaley Cuoco, dan Ellen Barkin. The Man from Toronto
            dijadwalkan ditayangkan pada 14 Januari 2022 di Amerika Serikat Sony
            Pictures Releasing
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
