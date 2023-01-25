import React, { ReactElement, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import '../assets/styles/global.scss';
import profileImage from '../assets/images/me.png';
import Post from "../modules/general/components/Post";

const ProjectsPage = (): ReactElement => {
    return (
        <>
            <Helmet>
                <title>Projects | Michael George - Frontend Engineer</title>
            </Helmet>
        </>
    );
}

export default ProjectsPage
