import React, { ReactElement } from 'react';
import clsx from "clsx";
import Diamond from '../../../assets/images/diamond.svg';
import Square from '../../../assets/images/square.svg';
import Triangle from '../../../assets/images/triangle.svg';
import FunShapeCSS from './FunShape.module.scss';

export type FunShapeType = 'diamond' | 'triangle' | 'square';

export interface FunShapeProps {
    type: FunShapeType;
    animationStyle?: number;
    className?: string;
}

// TODO Apply appropriate typing instead of any :|
const funShapeMap: Record<FunShapeType, any> = {
    diamond: Diamond,
    square: Square,
    triangle: Triangle,
};

const FunShape = (props: FunShapeProps): ReactElement => {
    const Component = funShapeMap[props.type];
    const animationStyle = props.animationStyle ?? 1;

    return (
        <Component
            className={clsx(FunShapeCSS[`floaty${animationStyle}`], props.className)}
        />
    );
};

export default FunShape;
