import React, {ReactElement, ReactNode} from 'react';
import * as GridItemCSS from './GridItem.module.scss';
import clsx from "clsx";

export interface GridItemProps {
    children: ReactNode;
    area?: 'a' | 'b' | 'c' | 'd';
}

const GridItem = (props: GridItemProps): ReactElement => {
    const area = props.area ?? 1;
    return (
        <div className={clsx(GridItemCSS.root, GridItemCSS[`area${area}`])}>
            {props.children}
        </div>
    );
};

export default GridItem;
