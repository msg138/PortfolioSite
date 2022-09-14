import React, { ReactElement } from 'react';
import * as IntroductionSectionCSS from './HeadingSection.module.scss';
import Section from "../../general/Section";
import Typography, {TypographyProps} from "../../general/Typography";
import FunShape from "../../general/FunShape";

export interface IntroductionSectionProps {
    title: string;
    titleVariant: TypographyProps['variant'];
    noShapes?: boolean;
}

const HeadingSection = (props: IntroductionSectionProps): ReactElement => {
    return (
        <Section>
            {!props.noShapes && (
                <>
                    <div className={IntroductionSectionCSS.shapeContainer1}>
                        <div>
                            <FunShape type={'diamond'} size="medium" animationStyle={1} />
                        </div>
                        <div>
                            <FunShape type={'square'} size="medium" animationStyle={3} />
                        </div>
                        <div>
                            <FunShape type={'triangle'} size="medium" animationStyle={2} />
                        </div>
                    </div>
                    <div className={IntroductionSectionCSS.shapeContainer2}>
                        <div>
                            <FunShape type={'square'} size="medium" animationStyle={2} />
                        </div>
                        <div>
                            <FunShape type={'triangle'} size="medium" animationStyle={1} />
                        </div>
                        <div>
                            <FunShape type={'diamond'} size="medium" animationStyle={3} />
                        </div>
                    </div>
                </>
            )}
            <span className={IntroductionSectionCSS.titleContainer}>
                <Typography variant={props.titleVariant} className={IntroductionSectionCSS.title}>
                    {props.title}
                </Typography>
            </span>
        </Section>
    );
};

export default HeadingSection;
