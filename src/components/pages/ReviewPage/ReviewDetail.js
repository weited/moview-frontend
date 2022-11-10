import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCurrentReview } from '../../../redux/slices/review';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background_lighter_grey};
  border-radius: 10px;
  padding: 40px 40px 60px;
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakpoints.largeLaptop}) {
  }
`;

const CoverWrapper = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 10px;
`;

// TODO inside should be rich text
const Text = styled.div`
  font-size: 24px;
  padding-top: 20px;
`;

const TimeWrapper = styled.span`
  font-size: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
  padding-right: 40px;
  margin-bottom: 20px;
`;

const fakeImg = 'https://picsum.photos/640/360';

function ReviewDetail() {
  const review = useSelector(selectCurrentReview);
  const { contents, createdTime } = review || {};

  const date = new Date(createdTime);
  const time = `${date.getHours()}:${date.getMinutes()} ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} `;

  return (
    <Container>
      <CoverWrapper src={fakeImg} />
      <Text>{contents}</Text>
      <TimeWrapper>{time}</TimeWrapper>
    </Container>
  );
}

export default ReviewDetail;
