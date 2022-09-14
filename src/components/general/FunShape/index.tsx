import React, { ReactElement } from 'react';
import clsx from "clsx";
import Diamond from '../../../assets/images/diamond.svg';
import Square from '../../../assets/images/square.svg';
import Triangle from '../../../assets/images/triangle.svg';
import * as FunShapeCSS from './FunShape.module.scss';

export type FunShapeType = 'diamond' | 'triangle' | 'square';

export type FunShapeDelay = 'small' | 'medium';
export type FunShapeSize = 'small' | 'medium';

export interface FunShapeProps {
    type: FunShapeType;
    delay?: FunShapeDelay;
    size?: FunShapeSize;
    animationStyle?: number;
    className?: string;
}

// TODO Apply appropriate typing instead of any :|
const funShapeMap: Record<FunShapeType, any> = {
    diamond: Diamond,
    square: Square,
    triangle: Triangle,
};

const funShapeDelayClassMap: Record<FunShapeDelay, string> = {
    small: FunShapeCSS.delaySmall,
    medium: FunShapeCSS.delayMedium,
};

const FunShape = (props: FunShapeProps): ReactElement => {
    const Component = funShapeMap[props.type];
    const size = props.size ?? 'small';
    const animationStyle = props.animationStyle ?? 1;

    return (
        <Component
            className={clsx(
                FunShapeCSS[`floaty${animationStyle}`],
                FunShapeCSS[size],
                props.delay && funShapeDelayClassMap[props.delay],
                props.className,
            )}
        />
    );
};

export default FunShape;
