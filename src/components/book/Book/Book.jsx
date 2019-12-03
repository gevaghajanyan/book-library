import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-navi';

import './book.scss';

const Book = memo(({
  showTitle = true,
  className = '',
  book: {
    id,
    title,
    imageUrl
  }
}) => (
  <Link href={`book/${id}`} onClick={e => e.stopPropagation()}>
    <figure className={`book-block ${className}`}>
      <img src={imageUrl} alt={title} title={title}/>
      {showTitle ? <figcaption>{title}</figcaption> : null}
    </figure>
  </Link>
));

Book.propTypes = {
  showTitle: PropTypes.bool,
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Book