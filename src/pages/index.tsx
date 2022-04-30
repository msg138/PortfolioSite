import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import Home from '../components/templates/Home';
import '../assets/styles/global.scss';

const IndexPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>Michael George - Frontend Engineer</title>
      </Helmet>
      <Home />
    </>
  );
}

export default IndexPage
