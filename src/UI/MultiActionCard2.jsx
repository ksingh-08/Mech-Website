import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import provide1 from '../assets/IC.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function MultiActionAreaCard2() {
  const { t } = useTranslation();
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
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {t('extended.industrialConsultancy')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {t('extended.industrialConsultancyDesc')}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}