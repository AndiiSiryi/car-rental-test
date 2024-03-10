import { StylesButton, Text } from './Button.styled';

export default function Button({ text, onClick, width, height }) {
  return (
    <StylesButton
      variant="contained"
      onClick={onClick}
      style={{ width: width, height: height }}
    >
      <Text>{text}</Text>
    </StylesButton>
  );
}
