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
          image="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/30662ad2a33deee611d2d1a12ca4d01492367a871c2f8e6b54a2fc689598f1b1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sonic the Hedgehog 2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Dr. Robotnik kembali ke bumi dengan sekutu baru, Knuckles. Sonic dan
            teman barunya Tails akan berjuang melawan mereka.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack spacing={2} direction="row">
          <a
            href="https://www.febbox.com/share/dGYumAD5"
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
