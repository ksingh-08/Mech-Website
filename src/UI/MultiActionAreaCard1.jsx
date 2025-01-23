import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import provide2 from '../assets/Inhouse.jpg'
import { Link } from 'react-router-dom';
export default function MultiActionAreaCard1() {
  return (
    <Link to="training">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        className='h-60'
          component="img"
          height="150"
          image={provide2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Inhouse Training
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          We provide comprehensive in-house training programs for individuals and organizations looking to enhance their welding skills and knowledge...
          </Typography>
        </CardContent>
      </CardActionArea>
      {/*       <CardActions>

        <Button size="small" color="primary">
          Read More
        </Button>
        
      </CardActions>*/}
    </Card>
    </Link>
  );
}
