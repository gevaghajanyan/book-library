import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-navi';

import Button from '../../lib/Button/Button';
import RateStars from '../../RateStars/RateStars';
import { dateConverter } from '../../../core/helpers/timeHelpers';

import './bookCard.scss';
import { getFileUrl } from '../../../core/helpers/endpointUrl';


const BookCard = memo(({
  book: {
    _id: id,
    published,
    title,
    author,
    categories,
    rate,
    country,
    pages,
    file,
    image,
  },
}) => (
  <Link href={`/book/${id}`}>
    <article className='book-card'>
      <section className='book-card-main'>
        <figure className='book-card-image-block'>
          <img
            src={getFileUrl(image)}
            alt={title}
            className='book-card-image'
          />
        </figure>
        <div className='book-card-info-block'>
          <h3>{title}</h3>
          {categories && (<span>
            Geners: {categories.map(({ name }) => (
            <React.Fragment key={name}>
              {name}/
            </React.Fragment>
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
        <div>
          {author}
        </div>
        <a
          onClick={e => e.stopPropagation()}
          href={getFileUrl(file)}
          target='_blank'
          download
        >
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
    _id: PropTypes.string,
    authors: PropTypes.array,
    title: PropTypes.string,
    file: PropTypes.string,
    image: PropTypes.string,
    categories: PropTypes.array,
    rate: PropTypes.number,
    published: PropTypes.any,
  }),
};

export default BookCard;
