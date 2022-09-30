import React, { ReactElement, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import '../assets/styles/global.scss';
import profileImage from '../assets/images/me.png';
import Post from "../modules/general/components/Post";

const ProjectsPage = ({ data }): ReactElement => {
    const posts = data.allMongodbSitePosts.edges.map(({ node }) => ({
        id: node.id,
        slug: node.slug,
        author: {
            name: node.author,
            createdAt: (new Date(node.createdAt)).toLocaleDateString(),
            updatedAt: node.updatedAt ? (new Date(node.updatedAt)).toLocaleDateString() : undefined,
            image: profileImage,
        },
        content: node.content,
        smiles: node.smiles,
    }));

    return (
        <>
            <Helmet>
                <title>Projects | Michael George - Frontend Engineer</title>
            </Helmet>
            {posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}
        </>
    );
}

export default ProjectsPage

export const query = graphql`
query ProjectPosts {
  allMongodbSitePosts(filter: {category: {eq: "projects"}}) {
    edges {
      node {
        content
        id
        author
        createdAt
        updatedAt
        title
        smiles
      }
    }
  }
}
`;