import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";

const CardTiga = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          className="johnwick"
          image="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/3b40275456f337b265a43be78a729e35ae23eb3cacc062c76cd283605d461a37._RI_V_TTW_.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            John Wick: Chapter 3 - Parabellum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Seri ketiga "John Wick" ini akan mengisahkan kelanjutan nasib si
            pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The
            Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14
            juta (sekitar Rp 201 miliar). Diburu oleh berbagai pembunuh bayaran
            hebat, John akan dibantu oleh karakter baru yang misterius bernama
            Sofia (Halle Berry).
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

export default CardTiga;
