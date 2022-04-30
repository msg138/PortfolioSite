import React, { ReactElement, ReactNode } from 'react';
import { LocationContext } from '@gatsbyjs/reach-router';
import * as LayoutCSS from './Layout.module.scss';

export interface LayoutProps {
  children: ReactNode;
  location: LocationContext['location'];
}

const Layout = (props: LayoutProps): ReactElement => {
  const location = props.location;
  return (
    <>
      {props.children}
    </>
  );
};

export default Layout;

