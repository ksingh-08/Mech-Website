import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import provide2 from '../assets/Inhouse.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function MultiActionAreaCard1() {
  const { t } = useTranslation();
  return (
    <Link to="training" className="no-underline">
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
            image={provide2}
            alt="Inhouse Training"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {t('extended.inhouseTraining')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary'}}>
              {t('extended.inhouseTrainingDesc')}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}