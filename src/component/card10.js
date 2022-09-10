import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CardSepuluh = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://upload.wikimedia.org/wikipedia/id/5/54/The_Batman_%28film%29_poster.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Batman
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ketika Riddler, seorang pembunuh berantai yang sadis mulai membunuh
            tokoh-tokoh politik penting di Gotham, Batman dituntut untuk
            menyelidiki korupsi tersembunyi di kota itu dan mempertanyakan
            keterlibatan keluarganya.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack spacing={2} direction="row">
          <a
            href="https://www.febbox.com/share/dZj8uibf"
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

export default CardSepuluh;
