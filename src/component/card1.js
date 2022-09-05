import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CardSatu = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://cdn0-production-images-kly.akamaized.net/UV2d_uwDPz5uKY6u-2DzrikKRqY=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3999523/original/076350300_1650347498-FQobVY2UcAMkRSa.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Thor: Love and Thunder
          </Typography>
          <Typography variant="body2" color="text.secondary">
            "Thor: Love and Thunder"menceritakan Thor dalam sebuah perjalanan
            yang belum pernah ia jalani – pencariankedamaian batin. Namun, masa
            pensiunnya terganggu oleh seorang pembunuh galaksi yang dikenal
            sebagai Gorr sang Dewa Jagal , yang ingin memusnahkan para dewa.
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

export default CardSatu;
