import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import * as SectionCSS from './Section.module.scss';

export interface SectionProps {
    children: ReactNode;
    // Different Pre defined grid layouts.
    grid?: 1 | 2 | 3;
}

const Section = (props: SectionProps): ReactElement => {
    return (
        <section className={SectionCSS.root}>
            <span className={clsx(SectionCSS.content, props.grid && SectionCSS[`grid${props.grid}`])}>
                {props.children}
            </span>
        </section>
    );
};

export default Section;
