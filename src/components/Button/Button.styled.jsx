import styled from 'styled-components';

export const StylesButton = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 12px 0 12px 0;
  border-radius: 12px;
  color: #ffffff;
  background-color: #3470ff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0b44cd;
  }
`;

export const Text = styled.span`
  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: none;
`;
