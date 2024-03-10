import NavBar from '../../components/NavBar/NavBar';
import { Button, Wrapper, Hero, RedText } from './Home.styled';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Hero>
          Make every journey unforgettable by choosing your perfect{' '}
          <RedText>rental car!</RedText>
        </Hero>

        <Button to={'/catalog'}>Rental cars</Button>
      </Wrapper>
    </>
  );
}
