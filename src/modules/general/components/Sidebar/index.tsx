import React from 'react';
import clsx from 'clsx';
import * as CommonCSS from '../../../../assets/styles/common.module.scss';
import * as SidebarCSS from './Sidebar.module.scss';
import profileImage from '../../../../assets/images/me.png';

const Sidebar = () => {
    return (
        <section className={clsx(CommonCSS.card, SidebarCSS.root)}>
            <img
                className={SidebarCSS.image}
                src={profileImage}
                alt="Tipping my hat courteously"
            />
            <h2 className={SidebarCSS.title}>
                Michael George
            </h2>
            <p className={SidebarCSS.content}>
                Hello! You seem to have found my site. Please have a look around!
            </p>
        </section>
    );
};

export default Sidebar;
