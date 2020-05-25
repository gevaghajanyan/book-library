import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { useBookDetailsBl } from './useBookDetailsBl';

import './bookDetails.scss';
import RateStars from '../../../components/RateStars/RateStars';
import { dateConverter } from '../../../core/helpers/timeHelpers';
import Button from '../../../components/lib/Button/Button';
import { getFileUrl } from '../../../core/helpers/endpointUrl';

const BookDetails = memo((props) => {
  const {
    book: {
      data,
      isLoading,
    },
  } = useBookDetailsBl(props);
  if (isLoading) {
    return 'loading';
  }
  const {
    published,
    shortDescription,
    longDescription,
    title,
    file,
    image,
    rate,
  } = data;

  return (
    <article className='book-details-section'>
      <img
        src={getFileUrl(image)}
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
          <a
            href={getFileUrl(file)}
            target='_blank'
            download
          >
            <Button>Download Now</Button>
          </a>
        </div>
      </header>
      <div dangerouslySetInnerHTML={{ __html: longDescription }}/>
    </article>
  );
});

BookDetails.propTypes = {
  bookId: PropTypes.string,
};

export default BookDetails;
