import CarItem from 'components/CarItem/CarItem';
import {
  WrapperList,
  Text,
  BackgroundWrapper,
  ContentWrapper,
  CustomLink,
} from './Favorites.styled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectFavorites } from '../../redux/selectors';
import { LoadMore } from 'pages/Catalog/Catalog.styled';

export default function Favorites() {
  const favoriteCars = useSelector(selectFavorites);
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);

  const loadMore = () => {
    const startIndex = page * 12;
    const nextCars = favoriteCars.favorites.slice(startIndex, startIndex + 12);
    setCars([...cars, ...nextCars]);
    setPage(page + 1);
  };

  useEffect(() => {
    const initialCars = favoriteCars.favorites.slice(0, 12);
    setCars(initialCars);
  }, [favoriteCars]);

  return (
    <BackgroundWrapper hasNoContent={cars.length === 0}>
      <ContentWrapper>
        {cars.length ? (
          <WrapperList>
            {cars.map((favorite, index) => (
              <CarItem key={index} data={favorite} />
            ))}
          </WrapperList>
        ) : (
          <Text>
            Your favorites are empty right now. <br />
            <CustomLink to="/catalog">Browse our catalog</CustomLink> to make
            your selection.
          </Text>
        )}
        {favoriteCars.favorites.length > cars.length && (
          <LoadMore variant="text" onClick={loadMore}>
            Load more
          </LoadMore>
        )}
      </ContentWrapper>
    </BackgroundWrapper>
  );
}
