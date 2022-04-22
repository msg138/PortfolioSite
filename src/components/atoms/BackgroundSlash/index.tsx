import React, { ReactElement, useMemo } from 'react';
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
  small: [50, 500],
  medium: [150, 720],
  large: [225, 1000],
};

const slashWidth = 700;

const BackgroundSlash = (props: BackgroundSlashProps): ReactElement => {
  const [edgeSize, centerSize] = backgroundSlashSizeMap[props.size ?? 'small'];
  const position = props.position ?? 'center';
  const startPoint = useMemo(() => {
    return slashWidth - (2 * edgeSize + centerSize);
  }, []);

  return (
    <svg className={clsx(BackgroundSlashCSS.root, BackgroundSlashCSS[position])} viewBox="0 0 700 1000">
      <rect
        className={clsx(BackgroundSlashCSS.edgePiece, BackgroundSlashCSS[props.color])}
        x={startPoint}
        y="0"
        height="1500"
        width={edgeSize}
      />
      <rect
        className={clsx(BackgroundSlashCSS.centerPiece, BackgroundSlashCSS[props.color])}
        x={startPoint + edgeSize}
        y="0"
        height="1500"
        width={centerSize}
      />
      <rect
        className={clsx(BackgroundSlashCSS.edgePiece, BackgroundSlashCSS[props.color])}
        x={startPoint + edgeSize + centerSize}
        y="0"
        height="1500"
        width={edgeSize}
      />
    </svg>
  );
};

export default BackgroundSlash;

