import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 541px;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.25);
  padding: 40px;
  z-index: 1000;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 8px;
  right: 6px;
  cursor: pointer;
`;

export const CloseImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const Wrapper = styled.div``;

export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const CarTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #121417;
`;

export const ModelSpan = styled.span`
  color: #3470ff;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoItem = styled.li`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;
  line-height: 1.5;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;

  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const CarDescription = styled.p`
  line-height: 1.43;
  margin-top: 14px;
  width: 461px;
`;

export const AdditionalInfo = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  font-size: 12px;
  letter-spacing: -0.24px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    width: 461px;
  }
`;

export const ConditionItem = styled.li`
  border-radius: 35px;
  color: #363535;
  background-color: #f9f9f9;
  padding: 7px 14px;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

export const ConditionSpan = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

export const CarImage = styled.img`
  width: 461px;
  height: 248px;
  display: block;
  object-fit: cover;
  border-radius: 14px;
`;

export const StyledLink = styled.a`
  display: inline-block;
  background-color: #3470ff;
  color: #ffffff;
  text-align: center;
  padding: 12px 50px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.42857;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;

  &:hover {
    background-color: #265df2;
  }
`;
