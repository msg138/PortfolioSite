import React, { ReactElement } from 'react';
import ProfileImage from '../../../assets/images/profile.png';
import * as IntroductionSectionCSS from './IntroductionSection.module.scss';
import Section from "../../general/Section";
import GridItem from "../../general/GridItem";
import Typography from "../../general/Typography";

export interface IntroductionSectionProps {

}

const IntroductionSection = (props: IntroductionSectionProps): ReactElement => {
    return (
        <Section grid={1}>
            <GridItem area="a">
                <Typography variant="h2">The name's <Typography variant="inline" emphasized>Michael George</Typography></Typography>
                <Typography emphasized>
                    Frontend Engineer Located in <Typography variant="inline" emphasized>Seattle, Washington</Typography> enjoying the beautiful Pacific North West weather.
                </Typography>
                <Typography emphasized>
                    Currently employed with Hostwinds as <Typography variant="inline" emphasized>Lead Frontend Engineer</Typography>.
                </Typography>
            </GridItem>
            <GridItem area="b">
                <img
                    src={ProfileImage}
                    alt={'Michael George, smiling'}
                />
            </GridItem>
            <GridItem area="c">
                
            </GridItem>
        </Section>
    );
};

export default IntroductionSection;
