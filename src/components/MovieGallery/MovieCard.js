import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { id, name, rating, posterImgUrl } = movie || {};
  const handleClick = () => {
    navigate(`movie/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 200, textAlign: 'center' }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" image={posterImgUrl} alt={name} />
        <CardContent sx={{ p: 1 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            sx={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              wordWrap: 'break-word',
              textOverflow: 'ellipsis',
            }}
          >
            {name}
          </Typography>
          <Typography variant="body" component="p" color="text.secondary" sx={{ width: '100%' }}>
            {rating}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
