import React, { ReactElement, ReactNode } from 'react';
import * as MenuItemCSS from './MenuItem.module.scss';

export interface MenuItemProps {
    label: string;
    icon?: ReactNode;
}

const MenuItem = (props: MenuItemProps): ReactElement => {
    return (
        <div
            className={MenuItemCSS.root}
        >
            <div className={MenuItemCSS.card}>
                {props.icon ?? 'Icon'}
            </div>
            <p className={MenuItemCSS.label}>
                {props.label}
            </p>
        </div>
    );
};

export default MenuItem;
