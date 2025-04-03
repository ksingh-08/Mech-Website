import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import provide1 from '../assets/IC.jpg';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard2() {
  return (
    <Link to="/industry-consultancy" className="no-underline">
      <Card
        sx={{ 
          maxWidth: 345, 
          borderRadius: 4, 
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: 6,
          },
        }}
        className="overflow-hidden shadow-lg"
      >
        <CardActionArea>
          <CardMedia
            className="h-60 rounded-t-2xl"
            component="img"
            height="150"
            image={provide1}
            alt="Industrial Consultancy"
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
      </Card>
    </Link>
  );
}