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
          <div className={AboutCSS.itemLine}>
            <p className={AboutCSS.itemName}>
              Favorite Framework
            </p>
            <p className={AboutCSS.itemDescription}>
              React
            </p>
          </div>
          <div className={AboutCSS.itemLine}>
            <p className={AboutCSS.itemName}>
              Favorite Game
            </p>
            <p className={AboutCSS.itemDescription}>
              Pokemon
            </p>
          </div>
        </div>
        <p className={AboutCSS.fullDescription}>
          Here is a description of me.
        </p>
        <p className={AboutCSS.fullDescription}>
          Here is another description of me.
        </p>
      </div>
    </div>
  )
};

export default About;

