import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export const HeartWrap = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const HeartFill = styled(FaHeart)`
  fill: #3470ff;
  width: 18px;
  height: 16px;
`;

export const HeartStroke = styled(FaRegHeart)`
  fill: #ffffffcc;
  width: 18px;
  height: 16px;
`;
