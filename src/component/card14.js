import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardEmpatbelas = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://cdn0-production-images-kly.akamaized.net/8sKe6w6rxplCTEPgkzFrcl6nXMI=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3934875/original/001011400_1644919160-257920819_418378333160843_2396124103390731993_n.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Turning Red
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Turning Red adalah film animasi fantasi remaja yang diproduksi Walt
            Disney Pictures dan Pixar Animation Studios serta didistribusikan
            oleh Walt Disney Studios Motion Pictures. Ditulis dan disutradarai
            Domee Shi, diproduseri oleh Lindsey Collins, dan dibintangi oleh
            Rosalie Chiang dan Sandra Oh.{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack spacing={2} direction="row">
          <a
            href="https://www.febbox.com/share/51Bb0K5x"
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

export default CardEmpatbelas;
