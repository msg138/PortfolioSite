import React, {ReactNode} from 'react';
import * as LayoutCSS from './Layout.module.scss';
import Sidebar from "../Sidebar";
import NavigationMenu from "../NavigationMenu";

export interface LayoutProps {
    children: ReactNode;
}

const Layout = (props: LayoutProps) => {
    return (
        <div className={LayoutCSS.root}>
            <div className={LayoutCSS.container}>
               <div className={LayoutCSS.sidebarContainer}>
                   <Sidebar />
               </div>
                <div className={LayoutCSS.contentContainer}>
                    <NavigationMenu />
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
