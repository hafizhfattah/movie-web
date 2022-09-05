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
          image="https://bacaterus.com/wp-content/uploads/2022/07/Fall-2022_.webp"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fall
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Becky dan Hunter adalah dua orang yang suka menghadapi ketakutan dan
            suka menantang diri mereka hingga batas terakhir. Tetapi, setelah
            mereka memanjat sebuah tower radio terbengkalai setinggi 600-an
            meter, mereka menemukan diri mereka terjebak di atas tanpa jalan
            turun.
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
