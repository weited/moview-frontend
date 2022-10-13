import styled from 'styled-components';
import logo from '../../assets/img/logo.png';

const Logo = styled.img.attrs({
  src: logo,
})`
  width: 90px;
  height: 40px;
  display: block;
  object-fit: cover;
  border-radius: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 135px;
    height: 60px;
    border-radius: 15px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.largeLaptop}) {
    width: 225px;
    height: 100px;
    border-radius: 25px;
  }
`;

export default Logo;
