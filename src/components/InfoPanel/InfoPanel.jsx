import React, { memo } from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './infoPanel.scss'

import books from '../../assets/images/books.png'

const InfoPanel = memo(({ ...props }) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      <section className='info-panel'>
        <div className='info-title'>
          <h1>You will find the most popular books here</h1>
          <p>Always Look On The Bright Side Of Life</p>
        </div>
        <img src={books} alt="books" className='info-panel-book'/>
      </section>
      <section className='info-panel info-panel-2'>
        <div className='info-title'>
          <h1>You will find the most popular books here</h1>
          <p>Always Look On The Bright Side Of Life</p>
        </div>
        <img src={books} alt="books" className='info-panel-book'/>
      </section>
      <section className='info-panel  info-panel-3'>
        <div className='info-title'>
          <h1>You will find the most popular books here</h1>
          <p>Always Look On The Bright Side Of Life</p>
        </div>
        <img src={books} alt="books" className='info-panel-book'/>
      </section>
    </Carousel>
  )
});

InfoPanel.propTypes = {};

export default InfoPanel