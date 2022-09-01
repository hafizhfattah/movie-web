import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions,  } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const CardDelapan = () => {
  return (
    <Card sx={{ maxWidth: 300  ,}} >
      <CardActionArea >
        <CardMedia
          component="img"
        
          height="200"
          image="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Avengers: Infinity War

          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Avengers dan sekutu mereka harus bersedia mengorbankan segalanya dalam upaya untuk mengalahkan Thanos yang kuat sebelum ia berhasil menghancurkan alam semesta.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Stack spacing={2} direction="row">
      <Button variant="contained">Downlaod</Button>
  
    </Stack>
      </CardActions>
    </Card>
  );
}

export default CardDelapan;
