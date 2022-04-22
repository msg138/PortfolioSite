import React, { ReactElement, ReactNode } from 'react';
import { Link } from 'gatsby';
import * as MenuItemCSS from './MenuItem.module.scss';

export interface MenuItemProps {
    label: string;
    path: string;
    icon?: ReactNode;
}

const MenuItem = (props: MenuItemProps): ReactElement => {
    return (
        <Link
            to={props.path}
            className={MenuItemCSS.root}
        >
            <div className={MenuItemCSS.card}>
                {props.icon ?? 'Icon'}
            </div>
            <p className={MenuItemCSS.label}>
                {props.label}
            </p>
        </Link>
    );
};

export default MenuItem;
