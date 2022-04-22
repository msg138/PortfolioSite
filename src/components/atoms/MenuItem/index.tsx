import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import * as MenuItemCSS from './MenuItem.module.scss';

export type MenuItemColor = 'red' | 'green' | 'blue' | 'yellow' | 'purple';

export interface MenuItemProps {
    label: string;
    path: string;
    color?: MenuItemColor;
    icon?: ReactNode;
}

const MenuItem = (props: MenuItemProps): ReactElement => {
    const color = props.color ?? 'red';
    return (
        <Link
            to={props.path}
            className={MenuItemCSS.root}
        >
            <div className={clsx(MenuItemCSS.card, MenuItemCSS[color])}>
                {props.icon ?? 'Icon'}
            </div>
            <p className={MenuItemCSS.label}>
                {props.label}
            </p>
        </Link>
    );
};

export default MenuItem;
