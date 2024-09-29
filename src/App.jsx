import { useEffect, lazy, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer id='Footer' />
      </Suspense>
    </>
  );
}

export default App;