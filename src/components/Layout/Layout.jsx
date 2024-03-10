import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Wrapper } from './Layout.styled';
import { Loader } from '../Loader/Loader';
import NavBar from '../NavBar/NavBar';

export default function Layout() {
  return (
    <>
      <Wrapper>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
}
