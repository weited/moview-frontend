import styled from 'styled-components';

const TagBox = styled.div`
  margin-left: 80px;
  margin-right: 10px;
  width: 20%;
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
  height: 20px;
  margin-bottom: 50px;
  font-size: 25px;
  font-weight: 900;
`;

const TrendingTags = styled.div`
  background-color: ${(props) => props.theme.palette.primary.background_light_gray};
  text-align: center;
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5%;
`;

const Tags = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: ${(props) => props.theme.palette.secondary.background_light_gray};
  border: 2px solid ${(props) => props.theme.palette.secondary.background_light_gray};
  width: 80%;
  height: 40px;
  border-radius: 8%;
  text-align: center;
  line-height: 35px;
  font-size: 20px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

function TrendingTag({ tag1, tag2, tag3, tag4, tag5, tag6 }) {
  return (
    <TagBox>
      <Title>Trending Tags</Title>
      <TrendingTags>
        <Tags>{tag1}</Tags>
        <Tags>{tag2}</Tags>
        <Tags>{tag3}</Tags>
        <Tags>{tag4}</Tags>
        <Tags>{tag5}</Tags>
        <Tags>{tag6}</Tags>
      </TrendingTags>
    </TagBox>
  );
}

export default TrendingTag;
