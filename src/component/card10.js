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
          className="thor"
          height="200"
          image="https://asset.kompas.com/crops/xu3eTsq4nfH_L2xuzYrhWUJS3YE=/200x136:1148x768/750x500/data/photo/2021/09/29/61541cf6511c3.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Boys
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The Boys adalah sebuah seri televisi web pahlawan super Amerika
            Serikat yang berdasarkan pada buku komik bernama sama karya Garth
            Ennis dan Darick Robertson. Dikembangkan oleh Eric Kripke untuk
            Amazon, seri tersebut tayang perdana pada 26 Juli 2019.
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

export default CardSepuluh;
