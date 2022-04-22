import React, { ReactElement } from 'react';
import BackgroundSlash from '../../atoms/BackgroundSlash';
import MenuItem from '../../atoms/MenuItem';
import * as MenuCSS from './Menu.module.scss';

const menuItems = [
  {
    label: 'About',
  },
  {
    label: 'Projects',
  },
  {
    label: 'Blog',
  },
];

const Menu = (): ReactElement => {
  return (
    <>
      <div className={MenuCSS.root}>
        <div className={MenuCSS.itemContainer}>
          <BackgroundSlash color="red" />
          {menuItems.map((menuItem) => (
            <MenuItem label={menuItem.label} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;

