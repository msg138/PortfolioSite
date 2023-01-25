import React, {ReactNode} from 'react';
import * as LayoutCSS from './Layout.module.scss';
import {PageContextProvider} from "../../../../context/pageContext";
import PageGroupContainer from "../PageGroupContainer";

export interface LayoutProps {
    children: ReactNode;
}

const Layout = (props: LayoutProps) => {
    return (
        <PageContextProvider>
            <div className={LayoutCSS.root}>
                <div className={LayoutCSS.container}>
                    <PageGroupContainer>
                        {props.children}
                    </PageGroupContainer>
                </div>
            </div>
        </PageContextProvider>
    );
};

export default Layout;
