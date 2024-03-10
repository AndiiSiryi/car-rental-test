import styled from 'styled-components';
import Image from '../../img/pexels-cesar-perez-733745.jpg';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Text = styled.p`
  display: flex;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  width: 1000px;
  margin-top: 380px;
  margin-left: auto;
  margin-right: auto;
`;

export const RedText = styled.span`
  color: #ff0000;
`;

export const Hero = styled.h1`
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  max-width: 820px;
  margin-top: 90px;
  margin-bottom: 66px;
  margin-left: auto;
  margin-right: auto;
  font-family: Manrope;
`;

export const Button = styled(Link)`
  display: flex;
  width: 140px;
  height: 2px;
  padding: 24px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 150px;
  background: rgb(180 192 213 / 26%);
  color: #fff;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Manrope';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-decoration: none;
  box-shadow: none;
  &:hover {
    background: rgb(180 192 213);
  }
`;
