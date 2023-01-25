import React, { ReactElement, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import '../assets/styles/global.scss';
import profileImage from '../assets/images/me.png';
import Post from "../modules/general/components/Post";

const BlogPage = (): ReactElement => {
    return (
        <>
            <Helmet>
                <title>Blog | Michael George - Frontend Engineer</title>
            </Helmet>
        </>
    );
}

export default BlogPage
