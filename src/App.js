import { Suspense, } from 'react';

import { useRoutes } from 'react-router-dom';


import { LoadingComponent } from './components';

import { APP_ROUTES } from './routes';

import './App.css';



function App() {


  const pages = useRoutes(APP_ROUTES);

  return (
    <Suspense fallback={<LoadingComponent />}>
      {pages}
    </Suspense>

  )
}

export default App;
