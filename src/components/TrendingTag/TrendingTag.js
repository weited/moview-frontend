import styled from 'styled-components';

const Title = styled.p`
  text-align: center;
  width: 300px;
  height: 20px;
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: 1000;
`;

const TrendingTags = styled.div`
  background-color: #f1f1f1;
  text-align: center;
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5%;
`;

const Tags = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #e3e3e3;
  border: 2px solid #e3e3e3;
  width: 200px;
  height: 40px;
  border-radius: 8%;
  text-align: center;
  line-height: 35px;
  font-size: 20px;
`;

function TrendingTag({ tag1, tag2, tag3, tag4, tag5, tag6 }) {
  return (
    <>
      <Title>Trending Tags</Title>
      <TrendingTags>
        <Tags>{tag1}</Tags>
        <Tags>{tag2}</Tags>
        <Tags>{tag3}</Tags>
        <Tags>{tag4}</Tags>
        <Tags>{tag5}</Tags>
        <Tags>{tag6}</Tags>
        <Tags />
      </TrendingTags>
    </>
  );
}

export default TrendingTag;
