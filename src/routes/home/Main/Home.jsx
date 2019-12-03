import React, { memo } from 'react';

import CategorySection from '../../../components/category/CategorySection/CategorySection';
import MostPopular from '../../../components/MostPopular/MostPopular';
import InfoPanel from '../../../components/InfoPanel/InfoPanel';
import TheLatest from '../../../components/TheLatest/TheLatest';

const Home = memo(({ ...props }) => {
  return (
    <React.Fragment>
      <InfoPanel />
      <MostPopular />
      <TheLatest />
      <CategorySection />
    </React.Fragment>
  )
});

Home.propTypes = {};

export default Home