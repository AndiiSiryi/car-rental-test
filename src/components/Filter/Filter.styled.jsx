import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 50px;
  gap: 8px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  height: 48px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: rgba(138, 138, 137, 1);
  font-family: 'Manrope';
  padding-left: 5px;
  margin-bottom: 8px;
`;

export const InputLeft = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px 0 0 14px;
  padding-left: 0;
  text-indent: 70px;
  font-family: 'Manrope';
  color: #121417;
  font-size: 18px;
  &:focus {
    outline-color: #3470ff;
    outline: none;
  }
`;

export const InputRight = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  border-radius: 0 14px 14px 0;
  padding-left: 0;
  text-indent: 45px;
  font-family: 'Manrope';
  color: #121417;
  font-size: 18px;
  &:focus {
    outline-color: #3470ff;
    outline: none;
  }
`;

export const SpanLeft = styled.span`
  position: absolute;
  display: block;
  border: none;
  left: 20px;
  top: 12px;
  z-index: 9;
  font-family: 'Manrope';
  color: #121417;
  font-size: 18px;
`;

export const SpanRight = styled.span`
  position: absolute;
  display: block;
  border: none;
  left: 180px;
  top: 12px;
  z-index: 9;
  font-family: 'Manrope';
  color: #121417;
  font-size: 18px;
`;

// Custom styles for Select
export const customSelectStyles = {
  control: styles => ({
    ...styles,
    width: '224px',
    height: '48px',
    borderColor: 'rgba(18, 20, 23, 0.2)',
    border: 'none',
    borderRadius: '14px',
    padding: '8px',
    fontSize: '16px',
    fontFamily: 'Manrope',
    backgroundColor: 'rgba(247, 247, 251, 1)',
    appearance: 'none',
    boxShadow: 'none',
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
    fontFamily: 'Manrope',
  }),
  placeholder: styles => ({
    ...styles,
    color: 'rgba(18, 20, 23, 1)',
  }),
};

// Custom styles  id 'priceSelect'
export const customSelectStylesForPriceSelect = {
  control: styles => ({
    ...styles,
    width: '125px',
    height: '48px',
    borderColor: 'rgba(18, 20, 23, 0.2)',
    border: 'none',
    borderRadius: '14px',
    padding: '8px',
    fontSize: '16px',
    fontFamily: 'Manrope',
    backgroundColor: 'rgba(247, 247, 251, 1)',
    appearance: 'none',
    boxShadow: 'none',
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
    fontFamily: 'Manrope',
  }),
  placeholder: styles => ({
    ...styles,
    color: 'rgba(18, 20, 23, 1)',
  }),
};
