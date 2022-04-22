import React, { ReactElement } from 'react';
import clsx from 'clsx';
import * as BackgroundSlashCSS from './BackgroundSlash.module.scss';

export type BackgroundSlashColor = 'blue' | 'red' | 'yellow';
export type BackgroundSlashSize = 'small' | 'medium' | 'large';
export type BackgroundSlashPosition = 'left' | 'right' | 'center';

export interface BackgroundSlashProps {
  color: BackgroundSlashColor;
  size?: BackgroundSlashSize;
  position?: BackgroundSlashPosition;
}

const backgroundSlashSizeMap: Record<BackgroundSlashSize, [number, number]> = {
  small: [25, 300],
  medium: [150, 720],
  large: [225, 1000],
};

const BackgroundSlash = (props: BackgroundSlashProps): ReactElement => {
  const [edgeSize, centerSize] = backgroundSlashSizeMap[props.size ?? 'small'];
  const position = props.position ?? 'center';

  return (
    <svg className={clsx(BackgroundSlashCSS.root, BackgroundSlashCSS[position])}>
      <rect
        className={clsx(BackgroundSlashCSS.edgePiece, BackgroundSlashCSS[props.color])}
        x="0"
        y="1000"
        width="1500"
        height={edgeSize}
        transform="rotate(-75 0 1000)"
      />
      <rect
        className={clsx(BackgroundSlashCSS.centerPiece, BackgroundSlashCSS[props.color])}
        x={edgeSize}
        y="1000"
        width="1500"
        height={centerSize}
        transform={`rotate(-75 ${edgeSize} 1000)`}
      />
      <rect
        className={clsx(BackgroundSlashCSS.edgePiece, BackgroundSlashCSS[props.color])}
        x={edgeSize + centerSize}
        y="1000"
        width="1500"
        height={edgeSize}
        transform={`rotate(-75 ${edgeSize + centerSize} 1000)`}
      />
    </svg>
  );
};

export default BackgroundSlash;

