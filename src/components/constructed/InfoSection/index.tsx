import React, { ReactElement, ReactNode } from 'react';
import * as InfoSectionCSS from './InfoSection.module.scss';
import Section from "../../general/Section";
import GridItem from "../../general/GridItem";
import Typography from "../../general/Typography";

export interface InfoSectionProps {
    title: string;
    description: ReactNode;
    finisher?: ReactNode;
}

const InfoSection = (props: InfoSectionProps): ReactElement => {
    return (
        <Section grid={2}>
            <GridItem area="a">
                <Typography variant={"h2"}>
                    {props.title}
                </Typography>
            </GridItem>
            <GridItem area="b">
                {props.description}
            </GridItem>
            {props.finisher && (
                <GridItem area="c">
                    {props.finisher}
                </GridItem>
            )}
        </Section>
    );
};

export default InfoSection;
