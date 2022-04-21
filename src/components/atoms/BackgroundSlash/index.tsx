import React, { ReactElement } from 'react';
import * as BackgroundSlashCSS from './BackgroundSlash.module.scss';

export type BackgroundSlashColor = 'blue' | 'red' | 'yellow';
export type BackgroundSlashSize = 'small' | 'medium' | 'large';
export type BackgroundSlashPosition = 'left' | 'right' | 'center';

export interface BackgroundSlashProps {
  color: BackgroundSlashColor;
  size?: BackgroundSlashSize;
  position?: BackgroundSlashPosition;
}

const backgroundSlashColorMap: Record<BackgroundSlashColor, [string, string, string]> = {
  blue: ['#156CE6', '#1054B3', '#156CE6'],
  red: ['#E61515', '#B31010', '#E61515'],
  yellow: ['#E6C615', '#B39A10', '#E6C615'],
};

const backgroundSlashSizeMap: Record<BackgroundSlashSize, [number, number]> = {
  small: [75, 500],
  medium: [150, 720],
  large: [225, 1000],
};

const BackgroundSlash = (props: BackgroundSlashProps) => {
  const [startColor, middleColor, endColor] = backgroundSlashColorMap[props.color];
  const [edgeSize, middleSize] = backgroundSlashSizeMap[props.size ?? 'medium'];

  return (
    <svg className={BackgroundSlashCSS.root}>
    <rect
    className={BackgroundSlashCSS.edge}
    x="0"
    y="1000"
    width="1500"
    height={edgeSize}
    style={{
      fill: startColor,
    }}
    transform="rotate(-75 0 1000)"
    />
    <rect
    className={BackgroundSlashCSS.middle}
    x={edgeSize}
    y="1000"
    width="1500"
    height={middleSize}
    style={{
      fill: middleColor,
    }}
    transform={`rotate(-75 ${edgeSize} 1000)`}
    />
    <rect
    className={BackgroundSlashCSS.edge}
    x={edgeSize + middleSize}
    y="1000"
    width="1500"
    height={edgeSize}
    style={{
      fill: endColor,
    }}
    transform={`rotate(-75 ${edgeSize + middleSize} 1000)`}
    />
    </svg>
  );
};

export default BackgroundSlash;

