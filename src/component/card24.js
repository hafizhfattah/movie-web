import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardDuaempat = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image=" https://images.soco.id/68-Review-Minions-The-Rise-of-Gru-1.jpg.jpg      "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Minions: The Rise of Gru
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Kisah tak terduga tentang mimpi seorang anak berusia dua belas tahun
            untuk menjadi penjahat super terhebat di dunia.
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

export default CardDuaempat;
