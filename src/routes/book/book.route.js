import React from 'react';
import { mount, route } from 'navi'
import BookDetails from './BookDetails/BookDetails';

export default mount({
  '/:bookId': route(({
    params: {
      bookId,
    }
  }) => {
    console.log(bookId, 'res');
    return {
      view: (
        <BookDetails bookId={bookId}/>
      )
    }
  }),
  '/': route({
    view: <div>Book</div>
  })
})