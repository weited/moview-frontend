import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

function MovieSlimCard() {
  const {
    state: { movie },
  } = useLocation();

  const { name, genre, rating, director, year, posterImgUrl } = movie;

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia component="img" sx={{ width: 100 }} image={posterImgUrl} alt={name} />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CardContent>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', marginBottom: 2 }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <StarIcon sx={{ fontSize: 30, color: '#f5c518', marginRight: '10px' }} />
              <Typography component="div" variant="h5">
                {rating}
              </Typography>
            </Box>
          </Box>
          <Typography variant="subtitle" color="text.secondary" component="div">
            {director} | {genre.name} | {year}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default MovieSlimCard;
