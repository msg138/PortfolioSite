import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {usePageContext} from "../../../../context/pageContext";
import * as PageGroupCSS from './PageGroup.module.scss';
import clsx from "clsx";
import {useSpring} from "@react-spring/web";

export interface PageGroupProps {
    name: string;
}

const beginningAnimation = {
    width: '50%',
};

const endingAnimation = {
    width: '100%',
};

const PageGroup = (props: PageGroupProps) => {
    const pageContext = usePageContext();
    const [open, setOpen] = useState(false);
    const [{ width }] = useSpring(() => ({
        from: open ? beginningAnimation : endingAnimation,
        to: open ? endingAnimation : beginningAnimation,
    }), [open]);

    useEffect(() => {
        pageContext.setPageGroup(props.name);
    }, [props.name]);

    const toggleOpen = useCallback(() => {
        console.log('Toggling open');
        setOpen((currentOpen) => !currentOpen);
    }, []);

    console.log(width);

    return (
        <div
            className={clsx(PageGroupCSS.root)}
            role="button"
            onClick={toggleOpen}
            style={{
                width,
            }}
        >
            {props.name}
        </div>
    );
};

export default PageGroup;
