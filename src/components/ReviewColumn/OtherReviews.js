import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
// import { useSelector } from 'react-redux';
// import { selectReview, selectCurrentReview } from '../../redux/slices/review';

function OtherReviews() {
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
        const { title, contents, id } = curElem;
        return (
          <div key={id}>
            <Card sx={{ backgroundColor: '#E3E3E3', width: 250, height: 300, margin: 3 }}>
              <CardContent>
                <h3 fontSize="14px"> {title.substring(0, 40)}</h3>
                <Typography sx={{ marginTop: 1 }}>{contents.substring(0, 120)}</Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default OtherReviews;
