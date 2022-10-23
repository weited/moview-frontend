import React from 'react';
import styled from 'styled-components';
import LetterAvatars from '../../LetterAvatar';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  border-radius: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const Content = styled.div`
  margin-left: 15px;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.largeLaptop}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const UserName = styled.div`
  font-size: 22px;
  font-weight: 600;
  @media (max-width: ${(props) => props.theme.breakpoints.largeLaptop}) {
    font-size: 17px;
  }
`;
const Time = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.palette.secondary.background_dark_gray};
  @media (max-width: ${(props) => props.theme.breakpoints.largeLaptop}) {
    font-size: 10px;
  }
`;
const Text = styled.div`
  font-size: 20px;
  @media (min-width: ${(props) => props.theme.breakpoints.largeLaptop}) {
    font-size: 15px;
  }
`;
function SingleComment({ comment }) {
  const { user, text, createdTime } = comment;
  const time = new Date(createdTime);
  return (
    <Container>
      <LetterAvatars firstName={user.firstName} lastName={user.lastName} url={user.profileImgUrl} />
      <Content>
        <Header>
          <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
          <Time>
            {`${time.getHours()}:${time.getMinutes()} ${time.getDay()}/${time.getMonth()}/${time.getFullYear()}`}
          </Time>
        </Header>
        <Text>{text}</Text>
      </Content>
    </Container>
  );
}

export default SingleComment;
