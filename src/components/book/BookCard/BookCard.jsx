import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-navi';

import Button from '../../lib/Button/Button';
import RateStars from '../../RateStars/RateStars';
import { dateConverter } from '../../../core/helpers/timeHelpers';

import './bookCard.scss';


const BookCard = memo(({
  book: {
    id,
    published,
    title,
    filePath,
    author,
    imageUrl,
    categories,
    rate,
    country,
    pages,
  }
}) => (
  <Link href={`/book/${id}`}>
    <article className='book-card'>
      <section className='book-card-main'>
        <figure className='book-card-image-block'>
          <img src={`/${imageUrl}`} alt="" className='book-card-image'/>
        </figure>
        <div className='book-card-info-block'>
          <h3>{title}</h3>
          {categories && (<span>
            Geners: {categories.map(gen => (
            <React.Fragment key={gen}>{gen}/</React.Fragment>
          ))}
          </span>)}
          {country && (<span>
              Country: {country}
          </span>)}
          {pages && (<span>
            Pages: {pages}
          </span>)}
          <div className='book-card-rate'>
            <RateStars rate={rate}/>
          </div>
          <span>Published: {dateConverter(published)}</span>
        </div>
      </section>
      <footer className='book-card-footer'>
        <div>{author}</div>
        <a href={filePath} download onClick={e => e.stopPropagation()}>
          <Button className='book-card-button'>
            Download Now
          </Button>
        </a>
      </footer>
    </article>
  </Link>
));

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    author: PropTypes.string,
    title: PropTypes.string,
    filePath: PropTypes.any,
    imageUrl: PropTypes.string,
    categories: PropTypes.array,
    rate: PropTypes.number,
    published: PropTypes.any
  })
};

export default BookCard