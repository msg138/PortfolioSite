import React, {ElementType, ReactElement, ReactNode} from 'react';
import * as GridItemCSS from './GridItem.module.scss';
import clsx from "clsx";

export interface GridItemProps {
    children: ReactNode;
    className?: string;
    target?: string;
    component?: ElementType;
    href?: string;
    area?: 'a' | 'b' | 'c' | 'd';
}

const GridItem = (props: GridItemProps): ReactElement => {
    const area = props.area ?? 1;
    const Component: ElementType = props.component ?? 'div';
    return (
        <Component
            className={clsx(
                GridItemCSS.root,
                GridItemCSS[`area${area}`],
                props.className,
            )}
            href={props.href}
            target={props.target}
        >
            {props.children}
        </Component>
    );
};

export default GridItem;
