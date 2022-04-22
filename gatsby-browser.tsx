import React from 'react';
import Layout from './src/components/templates/Layout';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
