import React, { ReactElement, ReactNode } from 'react';
import { LocationContext } from '@gatsbyjs/reach-router';
import BackgroundSlash, { BackgroundSlashColor, BackgroundSlashPosition } from '../../atoms/BackgroundSlash';
import BackButton from '../../atoms/BackButton';
import * as LayoutCSS from './Layout.module.scss';

export interface LayoutProps {
  children: ReactNode;
  location: LocationContext['location'];
}

const backgroundSlashColorMap: Record<string, BackgroundSlashColor> = {
  '/': 'red',
  '/about': 'blue',
  '/projects': 'yellow',
  '/blog': 'red',
};

const backgroundSlashPositionMap: Record<string, BackgroundSlashPosition> = {
  '/': 'center',
  '/about': 'left',
  '/projects': 'right',
  '/blog': 'left',
};

const Layout = (props: LayoutProps): ReactElement => {
  const location = props.location;
  return (
    <>
      <div
        className={LayoutCSS.root}
      >
        <div
          className={LayoutCSS.contentContainer}
        >
          <BackButton visible={location.pathname !== '/'} to="/" />
          <BackgroundSlash 
            color={backgroundSlashColorMap[location.pathname]}
            position={backgroundSlashPositionMap[location.pathname]}
          />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Layout;

