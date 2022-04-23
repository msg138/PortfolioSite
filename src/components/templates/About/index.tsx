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
        <div className={AboutCSS.itemGroup}>
          <p className={AboutCSS.itemName}>
            Favorite Color
          </p>
          <p className={AboutCSS.itemDescription}>
            Red
          </p>
        </div>
        <div className={AboutCSS.itemGroup}>
          <p className={AboutCSS.itemName}>
            Favorite Language
          </p>
          <p className={AboutCSS.itemDescription}>
            JavaScript
          </p>
          <p className={AboutCSS.itemName}>
            Favorite Framework
          </p>
          <p className={AboutCSS.itemDescription}>
            React
          </p>
          <p className={AboutCSS.itemName}>
            Favorite Game
          </p>
          <p className={AboutCSS.itemDescription}>
            Pokemon
          </p>
        </div>
      </div>
    </div>
  )
};

export default About;

