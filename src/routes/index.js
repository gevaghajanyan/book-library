import { lazy, mount, route, createBrowserNavigation } from 'navi';
import Home from './home/Main/Home';
import Books from './Books/Books';
import React from 'react';

const routes = mount({
  '/': route({
    title: 'Home',
    view: <Home/>
  }),
  '/books': route({
    title: 'Books',
    view: <Books />
  }),
  '/book': lazy(() => import('../routes/book/book.route.js'))
});

export const navigation = createBrowserNavigation({
  routes,
});
