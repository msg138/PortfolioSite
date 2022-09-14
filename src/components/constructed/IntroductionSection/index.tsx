import React, { ReactElement } from 'react';
import ProfileImage from '../../../assets/images/me.png';
import * as IntroductionSectionCSS from './IntroductionSection.module.scss';
import Section from "../../general/Section";
import GridItem from "../../general/GridItem";
import Typography from "../../general/Typography";
import FunShape from "../../general/FunShape";

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
                    className={IntroductionSectionCSS.image}
                    src={ProfileImage}
                    alt={'Michael George, smiling'}
                />
            </GridItem>
            <GridItem area="c">
                <Typography>
                    This section is TBD in terms of content. But I am thinking to make it more of an about me. Such that I have been coding with JS for the past few years, starting self taught then learning a vast amount more whilst on the job. I can say with confidence that JS is my specialty.
                </Typography>
            </GridItem>
            <GridItem area="d">
                <Typography>
                    If you are looking to get in contact with me, please email me:
                    {' '}
                    <a
                        href={`mailto:hello@themichaelgeorge.com`}
                        className={IntroductionSectionCSS.link}
                    >
                        hello@themichaelgeorge.com
                    </a>
                    .
                </Typography>
            </GridItem>
        </Section>
    );
};

export default IntroductionSection;
