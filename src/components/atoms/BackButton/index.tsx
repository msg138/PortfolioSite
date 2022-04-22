import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { IoIosArrowBack } from 'react-icons/io';
import * as BackButtonCSS from './BackButton.module.scss';

export interface BackButtonProps {
  visible: boolean;
  to: string;
}

const BackButton = (props: BackButtonProps): ReactElement => {
  return (
    <Link
      className={clsx(
        BackButtonCSS.root,
        props.visible && BackButtonCSS.visible
      )}
      to={props.to}
      aria-label="Back To Menu"
    >
      <IoIosArrowBack />
    </Link>
  );
};

export default BackButton;

