import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import provide1 from '../assets/IC.jpg'
import { Link } from 'react-router-dom';
export default function MultiActionAreaCard2() {
  return (
    <Link to="/industry-consultancy">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        className='h-60'
          component="img"
          height="150"
          image={provide1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Industrial Consultancy
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          We offer industrial consultancy services to businesses and organizations in the welding industry. Our experienced faculties provide professional advice...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {/* <Link to="training">
        <Button size="small" color="primary">
          Read More
        </Button>
        </Link> */}
      </CardActions>
    </Card>
    </Link>
  );
}
