import React, { ReactElement } from 'react';
import clsx from 'clsx';
import * as ImageBlockCSS from './ImageBlock.module.scss';

export type ImageBlockSize = 'small' | 'medium' | 'large';

export interface ImageBlockProps {
    src: string;
    alt: string;
    size?: ImageBlockSize;
}

const ImageBlock = (props: ImageBlockProps): ReactElement => {
    const size = props.size ?? 'small';

    return (
        <img
            src={props.src}
            alt={props.alt}
            className={clsx(ImageBlockCSS.root, ImageBlockCSS[size])}
        />
    );
};

export default ImageBlock;
