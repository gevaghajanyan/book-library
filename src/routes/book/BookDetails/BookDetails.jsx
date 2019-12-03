import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { useBookDetailsBl } from './useBookDetailsBl';

import './bookDetails.scss';
import RateStars from '../../../components/RateStars/RateStars';
import { dateConverter } from '../../../core/helpers/timeHelpers';
import Button from '../../../components/lib/Button/Button';

const BookDetails = memo((props) => {
  const {
    book: {
      data,
      isLoading
    }
  } = useBookDetailsBl(props);
  if (isLoading) {
    return 'loading'
  }
  const {
    published,
    description,
    title,
    filePath,
    imageUrl,
    rate,
    subDescription
  } = data;

  return (
    <article className='book-details-section'>
      <img
        src={`/${imageUrl}`}
        alt={title}
        className='book-details-image'
      />
      <header className='book-details-header'>
        <div className='book-details-header-published'>
          Published: {dateConverter(published)}
        </div>
        <h2>
          {title}
        </h2>
        <RateStars
          rate={rate}
        />
        <div className='book-details-download'>
          <a href={filePath} download>
            <Button>Download Now</Button>
          </a>
        </div>
      </header>
      {description && (
        <section className='book-details-body'>
          <header>
            <h3>Description</h3>
          </header>
          <div className='book-details-description'>
            {Array.isArray(description) && description.map(desc => {
              return <p key={desc}>{desc}</p>
            })}
          </div>
          {subDescription && (
            <div className='book-details-sub-description'>
              {subDescription.title && <div>{subDescription.title}</div>}
              <ul>
                {subDescription.list.map(subDesc => {
                  return <li className='book-details-sub-description-item' key={subDesc}>{subDesc}</li>
                })}
              </ul>
            </div>
          )}
        </section>
      )}
    </article>
  )
});

BookDetails.propTypes = {
  bookId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default BookDetails