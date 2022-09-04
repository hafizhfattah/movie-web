import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardDelapanbelas = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn0-production-images-kly.akamaized.net/aKRoGKldHUFcmAquRqh4QswaAbs=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3928471/original/008865500_1644389715-MV5BNjI4ZTQ1OTYtNTI0Yi00M2EyLThiNjMtMzk1MmZlOWMyMDQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Death on the Nile
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Saat berlibur di Sungai Nil, Hercule Poirot harus menyelidiki
            pembunuhan seorang pewaris muda
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

export default CardDelapanbelas;
