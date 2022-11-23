import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { CardContent, Typography, CardMedia, Box } from '@mui/material';
import axios from 'axios';

function AuthorReviews({ userId }) {
  const [reviews, setReviews] = useState([]);
  const getReviews = async () => {
    const response = await axios('https://service.moviewforum.com/api/v1/posts');
    setReviews(await response.data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  return (
    <>
      {getMultipleRandom(reviews, 3).map((curElem) => {
        const { movie, id, title, contents } = curElem;
        return (
          <div key={id}>
            <Card
              sx={{
                backgroundColor: '#E3E3E3',
                width: 250,
                height: 300,
                margin: 3,
              }}
            >
              <CardContent>
                <h3>{title.substring(0, 40)}</h3>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="120px"
                    width="80px"
                    image={movie.posterImgUrl}
                    alt="pic"
                    objectFit="cover"
                    sx={{ marginTop: 1, alignItems: 'center' }}
                  />
                  <Typography sx={{ marginTop: 1, marginLeft: 2 }}>
                    {contents.substring(0, 100)}
                    {userId}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default AuthorReviews;
