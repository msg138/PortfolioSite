import React, { ReactElement } from 'react';
import TagLineSection from "../../constructed/TagLineSection";
import IntroductionSection from "../../constructed/IntroductionSection";

const Home = (): ReactElement => {
  return (
    <>
        <TagLineSection />
        <IntroductionSection />
    </>
  );
};

export default Home;

