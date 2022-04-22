import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import Menu from '../components/templates/Menu';
import '../assets/styles/global.scss';

const IndexPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>Michael George - Frontend Engineer</title>
      </Helmet>
      <Menu />
    </>
  );
}

export default IndexPage
