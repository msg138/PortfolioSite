import React from 'react';
import clsx from 'clsx';
import { BiHome, BiCodeBlock, BiCommentDetail } from "react-icons/bi";
import * as CommonCSS from '../../../../assets/styles/common.module.scss';
import * as NavigationMenuCSS from './NavigationMenu.module.scss';
import Search from "../Search";

const NavigationMenu = () => {
    return (
        <nav className={clsx(CommonCSS.card, NavigationMenuCSS.root)}>
            <ul className={NavigationMenuCSS.itemList}>
                <li className={NavigationMenuCSS.item}>
                    <a href="/">
                        <BiHome />
                    </a>
                </li>
                <li className={NavigationMenuCSS.item}>
                    <a href="/projects">
                        <BiCodeBlock />
                    </a>
                </li>
                <li className={NavigationMenuCSS.item}>
                    <a href="/blog">
                        <BiCommentDetail />
                    </a>
                </li>
            </ul>
            <Search />
        </nav>
    );
};

export default NavigationMenu;
