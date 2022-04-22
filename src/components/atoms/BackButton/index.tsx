import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import * as BackButtonCSS from './BackButton.module.scss';

export interface BackButtonProps {
  visible: boolean;
  to: string;
}

const BackButton = (props: BackButtonProps): ReactElement => {
  return (
    <Link className={clsx(BackButtonCSS.root, props.visible && BackButtonCSS.visible)} to={props.to}>
      Back
    </Link>
  );
};

export default BackButton;

