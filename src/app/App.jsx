import React, { Suspense } from 'react';
import { Router, View } from 'react-navi'

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { navigation } from '../routes';

import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <main className='main'>
        <Router navigation={navigation}>
          <Suspense fallback={null}>
            <View/>
          </Suspense>
        </Router>
        <div className='footer'/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
