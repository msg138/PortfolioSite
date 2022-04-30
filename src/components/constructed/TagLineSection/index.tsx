import React, { ReactElement } from 'react';
import * as IntroductionSectionCSS from './TagLineSection.module.scss';
import Section from "../../general/Section";
import Typography from "../../general/Typography";

export interface IntroductionSectionProps {

}

const TagLineSection = (props: IntroductionSectionProps): ReactElement => {
    return (
        <Section>
            <span className={IntroductionSectionCSS.titleContainer}>
                <Typography variant="h1" className={IntroductionSectionCSS.title}>
                    I help engineer elegantly performant frontend interface solutions.
                </Typography>
            </span>
        </Section>
    );
};

export default TagLineSection;
