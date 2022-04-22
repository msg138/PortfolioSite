import React, { ReactElement } from 'react';
import {
  HiOutlineUserCircle,
  HiOutlineTerminal,
  HiOutlineCollection,
  HiOutlinePhotograph,
  HiOutlineChat,
} from 'react-icons/hi';
import BackgroundSlash from '../../atoms/BackgroundSlash';
import MenuItem from '../../atoms/MenuItem';
import * as MenuCSS from './Menu.module.scss';

const menuItems = [
  {
    label: 'About',
    path: '/about',
    icon: <HiOutlineUserCircle />,
    color: 'red',
  },
  {
    label: 'Skills',
    path: '/skills',
    icon: <HiOutlineTerminal />,
    color: 'yellow',
  },
  {
    label: 'Projects',
    path: '/projects',
    icon: <HiOutlineCollection />,
    color: 'blue',
  },
  {
    label: 'Blog',
    path: '/blog',
    icon: <HiOutlinePhotograph />,
    color: 'purple',
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: <HiOutlineChat />,
    color: 'green',
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

