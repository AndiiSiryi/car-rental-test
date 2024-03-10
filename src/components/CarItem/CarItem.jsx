import { useState } from 'react';
import Button from 'components/Button/Button';
import {
  Wrapper,
  ImageWrap,
  Image,
  TitleWrap,
  Title,
  Span,
  Text,
  List,
  Item,
} from './CarItem.styled';
import HeartIcon from '../HeartIcon/HeartIcon';
import Modal from 'components/Modal/Modal';
import PlaceholderImage from '../../img/placeholderCar.jpg';

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

export default function CarItem({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const carImage =
    data.img && isValidUrl(data.img) ? data.img : PlaceholderImage;
  return (
    <Wrapper>
      <ImageWrap>
        <HeartIcon data={data} />
        <Image src={carImage} alt="Car" />
      </ImageWrap>
      <TitleWrap>
        <Title>
          {data.make} {''}
          <Span>{data.model}</Span>, {data.year}
        </Title>
        <Text> {data.rentalPrice}</Text>
      </TitleWrap>
      <List>
        <Item>{data.address.split(',')[1]}</Item>
        <Item>{data.address.split(',')[2]}</Item>
        <Item>{data.rentalCompany}</Item>
        <Item>{data.type}</Item>
        <Item>{data.model}</Item>
        <Item>{data.mileage}</Item>
        <Item>{data.accessories[0]}</Item>
      </List>
      <Button onClick={handleOpen} text="Learn more" width="274px" />
      {open && <Modal open={open} onClose={handleClose} data={data} />}
    </Wrapper>
  );
}
