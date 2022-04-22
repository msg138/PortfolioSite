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
  '/contact': 'yellow',
  '/skills': 'blue',
};

const backgroundSlashPositionMap: Record<string, BackgroundSlashPosition> = {
  '/': 'center',
  '/about': 'left',
  '/projects': 'right',
  '/blog': 'left',
  '/contact': 'left',
  '/skills': 'right',
};

const Layout = (props: LayoutProps): ReactElement => {
  const location = props.location;
  return (
    <>
      <div
        className={LayoutCSS.root}
      >
        <div
          className={LayoutCSS.container}
        >
          <BackgroundSlash 
            color={backgroundSlashColorMap[location.pathname]}
            position={backgroundSlashPositionMap[location.pathname]}
          />
          <BackButton visible={location.pathname !== '/'} to="/" />
          <span className={LayoutCSS.contentContainer}>{props.children}</span>
        </div>
      </div>
    </>
  );
};

export default Layout;

