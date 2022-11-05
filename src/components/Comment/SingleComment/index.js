import React from 'react';
import styled from 'styled-components';
import LetterAvatars from '../../LetterAvatar';

const Container = styled.div`
  text-align: left;
  display: flex;
  padding-top: 20px;
  border-radius: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const Content = styled.div`
  margin-left: 15px;
  width: 100%;
  flex-shrink: 2;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const Header = styled.header`
  display: flex;
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
      <LetterAvatars username={user?.username} url={user.profileImgUrl} />
      <Content>
        <Header>
          <UserName>
            {user?.username
              ? user.username.replace(user.username[0], user.username[0].toUpperCase())
              : 'User'}
          </UserName>
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
