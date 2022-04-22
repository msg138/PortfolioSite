import React, { ReactElement } from 'react';
import BackgroundSlash from '../../atoms/BackgroundSlash';
import MenuItem from '../../atoms/MenuItem';
import * as MenuCSS from './Menu.module.scss';

const menuItems = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
];

const Menu = (): ReactElement => {
  return (
    <div className={MenuCSS.itemContainer}>
      {menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.label}
          {...menuItem}
        />
      ))}
    </div>
  );
};

export default Menu;

