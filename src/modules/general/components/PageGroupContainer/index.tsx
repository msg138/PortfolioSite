import React, {ReactNode} from 'react';
import * as PageGroupContainerCSS from './PageGroupContainer.module.scss';

export interface PageGroupContainerProps {
    children: ReactNode;
}

const PageGroupContainer = (props: PageGroupContainerProps) => {
    return (
        <div className={PageGroupContainerCSS.root}>
            {props.children}
        </div>
    );
};

export default PageGroupContainer;
