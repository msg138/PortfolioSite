import React from 'react';
import clsx from 'clsx';
import { BiHome, BiCodeBlock, BiCommentDetail } from "react-icons/bi";
import * as CommonCSS from '../../../../assets/styles/common.module.scss';
import * as NavigationMenuCSS from './NavigationMenu.module.scss';

const NavigationMenu = () => {
    return (
        <nav className={clsx(CommonCSS.card, NavigationMenuCSS.root)}>
            <ul className={NavigationMenuCSS.itemList}>
                <li className={NavigationMenuCSS.item}>
                    <a href="/" aria-label="Home">
                        <BiHome />
                    </a>
                </li>
                <li className={NavigationMenuCSS.item}>
                    <a href="/projects" aria-label="Projects">
                        <BiCodeBlock />
                    </a>
                </li>
                <li className={NavigationMenuCSS.item}>
                    <a href="/blog" aria-label="Blog">
                        <BiCommentDetail />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
