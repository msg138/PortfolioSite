import React, {ReactElement, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import '../assets/styles/global.scss';
import {usePageContext} from "../context/pageContext";
import PageGroup from "../modules/general/components/PageGroup";

const IndexPage = (): ReactElement => {
    const pageContext = usePageContext();

    useEffect(() => {
        // TODO Confirm that resources are loaded before setting these.
        pageContext.setPage(null);
        pageContext.setPageGroup(null);
    }, []);

    return (
        <>
            <Helmet>
                <title>Michael George - Frontend Engineer</title>
            </Helmet>
            <PageGroup name={'misc'} />
        </>
    );
}

export default IndexPage
