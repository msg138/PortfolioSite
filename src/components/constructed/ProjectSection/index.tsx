import React, { ReactElement } from 'react';
import * as ProjectSectionCSS from './ProjectSection.module.scss';
import Section from "../../general/Section";
import GridItem from "../../general/GridItem";
import Typography from "../../general/Typography";
import HostwindsMarketingImage from '../../../assets/images/hostwinds-marketing.png';

export interface ProjectSectionProps {
}

const ProjectSection = (props: ProjectSectionProps): ReactElement => {
    return (
        <Section grid={2}>
            <GridItem area="a" component={'a'} href={'https://www.hostwinds.com/'}>
                <Typography variant="h3" center>
                    Hostwinds Marketing Site
                </Typography>
                <Typography variant="h4">
                    Tools Used
                </Typography>
                <img
                    src={HostwindsMarketingImage}
                    alt="Hostwinds Marketing Site"
                />
            </GridItem>
            <GridItem area="b">
                asdf
            </GridItem>
        </Section>
    );
};

export default ProjectSection;
