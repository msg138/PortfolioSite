import React, { ReactElement } from 'react';
import clsx from 'clsx';
import * as AboutCSS from './About.module.scss';

const About = (): ReactElement => {
  return (
    <div className={AboutCSS.root}>
      <div
        className={clsx(AboutCSS.section, AboutCSS.card)}
      >
        <p className={AboutCSS.luckyNumber}>138</p>
        <p className={AboutCSS.name}>Michael</p>
      </div>
      <div className={clsx(AboutCSS.section, AboutCSS.information)}>
        <div
          className={AboutCSS.coin}
        >
        </div>
        <div>
          <div>
            Printed on
          </div>
          <div>
            11/14/2021 10:49
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;

