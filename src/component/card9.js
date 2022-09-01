import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions,  } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const CardSembilan = () => {
  return (
    <Card sx={{ maxWidth: 300  ,}} >
      <CardActionArea >
        <CardMedia
          component="img"
         
          height="200"
          image="https://m.media-amazon.com/images/M/MV5BMTY0MjEyODQzMF5BMl5BanBnXkFtZTcwMTczMjQ4Mg@@._V1_FMjpg_UX1000_.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          2012
          </Typography>
          <Typography variant="body2" color="text.secondary">
          2012 adalah sebuah film bencana fiksi ilmiah yang diproduksi tahun 2009 yang disutradarai Roland Emmerich. Film ini memiliki ensemble cast, termasuk John Cusack, Amanda Peet, Danny Glover, Thandie Newton, Oliver Platt, Chiwetel Ejiofor, dan Woody Harrelson.          </Typography>
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

export default CardSembilan;
