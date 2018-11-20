import React from 'react'
import Loadable from 'react-loadable'

function Loading() {
    return <div>Loading...</div>;
  }

  const Dummy = Loadable({
    loader: () => import('./features/Dummy/index'),
    loading: Loading,
  });

  const Dummyz = Loadable({
    loader: () => import('./features/Dummyzz/index'),
    loading: Loading,
  });

const routes = [
    { path: '/dummy', name: 'Dummy', component: Dummy },
    { path: '/dummyz', name: 'Dumyz', component: Dummyz },
];

export default routes;
