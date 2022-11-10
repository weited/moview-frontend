import styled from 'styled-components';

const Container = styled.div`
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.background_light_gray};
  border-radius: 10px;
  border: 2px solid black;
  width: 100px;
  padding: 20px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 150px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 280px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 340px;
  }
`;

export default Container;
