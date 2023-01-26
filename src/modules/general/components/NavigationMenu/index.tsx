import React from 'react';
import clsx from 'clsx';
import { BiHome, BiCodeBlock, BiCommentDetail } from "react-icons/bi";
import * as CommonCSS from '../../../../assets/styles/common.module.scss';
import * as NavigationMenuCSS from './NavigationMenu.module.scss';
import {Link} from "gatsby";

const NavigationMenu = () => {
    return (
        <nav className={clsx(CommonCSS.card, NavigationMenuCSS.root)}>
            <ul className={NavigationMenuCSS.itemList}>
                <li className={NavigationMenuCSS.item}>
                    <Link
                        to={'/'}
                        aria-label="Home"
                    >
                        <BiHome />
                    </Link>
                </li>
                <li className={NavigationMenuCSS.item}>
                    <Link
                        to={'/projects'}
                        aria-label="Projects"
                    >
                        <BiCodeBlock />
                    </Link>
                </li>
                <li className={NavigationMenuCSS.item}>
                    <Link
                        to={'/blog'}
                        aria-label="Blog"
                    >
                        <BiCommentDetail />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
