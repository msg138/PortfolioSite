import React, { ReactElement } from 'react';
import HeadingSection from "../../constructed/HeadingSection";
import IntroductionSection from "../../constructed/IntroductionSection";
import ProjectSection from "../../constructed/ProjectSection";
import hostwindsMarketingImage from '../../../assets/images/hostwinds-marketing.png';
import InfoSection from "../../constructed/InfoSection";

const Home = (): ReactElement => {
  return (
    <>
        <HeadingSection
            title="I help engineer elegantly performant frontend interface solutions."
            titleVariant="h1"
        />
        <IntroductionSection />
    </>
  );
};

export default Home;

