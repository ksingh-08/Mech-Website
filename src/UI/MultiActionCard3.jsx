import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import provide3 from '../assets/Workshop.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function MultiActionAreaCard3() {
  const { t } = useTranslation();
  return (
    <Link to="/workshop" className="no-underline">
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
            image={provide3}
            alt="Dedicated Workshops"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {t('extended.dedicatedWorkshops')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {t('extended.dedicatedWorkshopsDesc')}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
