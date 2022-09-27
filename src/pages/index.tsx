import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import '../assets/styles/global.scss';

const IndexPage = (): ReactElement => {
    return (
        <>
            <Helmet>
                <title>Michael George - Frontend Engineer</title>
            </Helmet>
            This is happening.
        </>
    );
}

export default IndexPage
