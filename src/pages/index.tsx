import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import '../assets/styles/global.scss';
import profileImage from '../assets/images/me.png';
import Post from "../modules/general/components/Post";

const dummyPosts = [{
    id: '1',
    author: {
        name: 'Michael George',
        createdAt: 'Today',
        image: profileImage,
    },
    content: 'This is my first post!<br>Hope that you like it!',
}];

const IndexPage = (): ReactElement => {
    return (
        <>
            <Helmet>
                <title>Michael George - Frontend Engineer</title>
            </Helmet>
            {dummyPosts.map((dummyPost) => (
                <Post key={dummyPost.id} {...dummyPost} />
            ))}
        </>
    );
}

export default IndexPage
