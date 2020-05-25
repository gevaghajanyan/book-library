import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-navi';

import './book.scss';
import { getFileUrl } from '../../../core/helpers/endpointUrl';

const Book = memo(({
  showTitle = true,
  className = '',
  book: {
    _id: id,
    title,
    image,
  },
}) => (
  <Link
    href={`book/${id}`}
    onClick={e => e.stopPropagation()}
  >
    <figure
      className={`book-block ${className}`}
    >
      <img
        src={getFileUrl(image)}
        alt={title}
        title={title}
      />
      {showTitle
        ? (
          <figcaption>
            {title}
          </figcaption>
        )
        : null}
    </figure>
  </Link>
));

Book.propTypes = {
  showTitle: PropTypes.bool,
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default Book;
