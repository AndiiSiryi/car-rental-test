import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/slice';
import { selectFavorites } from '../../redux/selectors';
import { HeartWrap, HeartFill, HeartStroke } from './HeartIcon.styled';

export default function HeartIcon({ data }) {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorites);
  const isChecked = favoriteCars.favorites.some(({ id }) => id === data.id);

  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(removeFavorite(data));
    } else {
      dispatch(addFavorite(data));
    }
  };

  return (
    <HeartWrap onClick={handleToggleFavorite}>
      {isChecked ? <HeartFill /> : <HeartStroke />}{' '}
    </HeartWrap>
  );
}
