import styled from 'styled-components';
import Image from '../../img/pexels-cesar-perez-733745.jpg';
import { Link } from 'react-router-dom';


export const WrapperList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
`;

export const BackgroundWrapper = styled.div`
  background-image: url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  ${props => !props.hasNoContent && `background-image: none;`}
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1184px;
  margin: 0 auto;
  padding: 50px;
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  color: #ffff;
  text-align: center;
  padding-top: 70px;
`;

export const CustomLink = styled(Link)`
  color: #ff5722;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  text-decoration: none;
`;
