import React, {ElementType, ReactElement, ReactNode} from 'react';
import clsx from 'clsx';
import * as TypographyCSS from './Typography.module.scss';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'inline';

export interface TypographyProps {
    children: ReactNode;
    className?: string;
    variant?: TypographyVariant;
    emphasized?: boolean;
}

const variantComponentMap: Record<TypographyVariant, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    p: 'p',
    inline: 'span',
};

const Typography = (props: TypographyProps): ReactElement => {
    const variant: TypographyVariant = props.variant ?? 'p';
    const Component = variantComponentMap[variant];
    return (
        <Component
            className={clsx(
                TypographyCSS.root,
                TypographyCSS[variant],
                props.emphasized && TypographyCSS.emphasized,
                props.className,
            )}
        >
            {props.children}
        </Component>
    );
};

export default Typography;
