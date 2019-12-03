import React, { Suspense } from 'react';
import { Router, View } from 'react-navi'

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import routes from '../routes';

import styles from './app.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header/>
      <Router routes={routes}>
        <Suspense fallback={null}>
          <View/>
        </Suspense>
      </Router>
      <Footer/>
    </div>
  );
};

export default App;
