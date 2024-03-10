import React, { useEffect } from 'react';
import CloseIcon from '../../img/x.svg';
import {
  ModalContainer,
  CloseButton,
  CloseImage,
  CarImage,
  Wrapper,
  TextWrap,
  CarTitle,
  ModelSpan,
  InfoList,
  InfoItem,
  CarDescription,
  AdditionalInfo,
  ConditionList,
  ConditionItem,
  ConditionSpan,
  ModalBackdrop,
  StyledLink,
} from './Modal.styled';
import PlaceholderImage from '../../img/placeholderCar.jpg';

export default function Modal({ open, onClose, data }) {
  useEffect(() => {
    const handleEscape = event => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onClose]);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [open]);

  if (!open) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <CloseImage src={CloseIcon} alt="Close button" />
        </CloseButton>
        <CarImage src={data.img || PlaceholderImage} alt={data.make} />
        <Wrapper>
          <TextWrap>
            <CarTitle>
              {data.make} <ModelSpan>{data.model},</ModelSpan> {data.year}
            </CarTitle>
          </TextWrap>
          <InfoList>
            <InfoItem>{data.address.split(',')[1]}</InfoItem>
            <InfoItem>{data.address.split(',')[2]}</InfoItem>
            <InfoItem>Id: {data.id}</InfoItem>
            <InfoItem>Year: {data.year}</InfoItem>
            <InfoItem>Type: {data.type}</InfoItem>
          </InfoList>
          <InfoList>
            <InfoItem>Fuel Consumption: {data.fuelConsumption}</InfoItem>
            <InfoItem>Engine Size: {data.engineSize}</InfoItem>
          </InfoList>
          <CarDescription>{data.description}</CarDescription>
          <AdditionalInfo>Accessories and functionalities:</AdditionalInfo>
          <InfoList>
            {data.accessories.map((item, index) => (
              <InfoItem key={index}>{item}</InfoItem>
            ))}
          </InfoList>
          <InfoList>
            {data.functionalities.map((item, index) => (
              <InfoItem key={index}>{item}</InfoItem>
            ))}
          </InfoList>
          <AdditionalInfo>Rental Conditions:</AdditionalInfo>
          <ConditionList>
            <ConditionItem>
              Minimum age:{' '}
              <ConditionSpan>
                {new Date().getFullYear() - data.year}
              </ConditionSpan>
            </ConditionItem>
            <ConditionItem>
              {data.rentalConditions.split('\n')[1]}
            </ConditionItem>
            <ConditionItem>
              {data.rentalConditions.split('\n')[2]}
            </ConditionItem>
            <ConditionItem>
              Mileage:{' '}
              <ConditionSpan>
                {data.mileage.toLocaleString('en-US')}
              </ConditionSpan>
            </ConditionItem>
            <ConditionItem>
              Price: <ConditionSpan>{data.rentalPrice}</ConditionSpan>
            </ConditionItem>
          </ConditionList>
          <StyledLink href="tel:+380730000000" width="168px">
            Rental car
          </StyledLink>
        </Wrapper>
      </ModalContainer>
    </ModalBackdrop>
  );
}
