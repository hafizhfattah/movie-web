import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardLimabelas = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://idseducation.com/wp-content/uploads/2022/07/the-bad-guys.jpg   "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Bad Guys
          </Typography>
          <Typography variant="body2" color="text.secondary">
            berdasarkan seri buku terlaris New York Times, kelompok kriminal
            yang terdiri dari beberapa penjahat hewan akan mencoba aksi penipuan
            mereka yang paling menantang,
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

export default CardLimabelas;
