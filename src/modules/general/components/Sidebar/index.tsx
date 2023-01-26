import React from 'react';
import clsx from 'clsx';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import * as CommonCSS from '../../../../assets/styles/common.module.scss';
import * as SidebarCSS from './Sidebar.module.scss';
import profileImage from '../../../../assets/images/me.png';

const Sidebar = () => {
    return (
        <>
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
            <div className={SidebarCSS.socialContainer}>
                <a href="https://www.github.com/msg138">
                    <BsGithub />
                </a>
                <a href="https://www.linkedin.com/">
                    <BsLinkedin />
                </a>
            </div>
        </>
    );
};

export default Sidebar;
