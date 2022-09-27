import React from 'react';
import { BsEmojiSmile } from "react-icons/bs";
import * as CommonCSS from '../../../../assets/styles/common.module.scss';
import * as PostCSS from './Post.module.scss';

export interface PostProps {
    id: number | string;
    author: {
        name: string;
        createdAt: string;
        updatedAt?: string;
        image?: string;
        imageAlt?: string;
    };
    content: string;
    smiles?: number;
}

const Post = (props: PostProps) => {
    return (
        <div
            className={CommonCSS.card}
        >
            <p className={PostCSS.authorContainer}>
                <img
                    src={props.author.image}
                    alt={props.author.imageAlt}
                />
                <span className={PostCSS.author}>
                    <b>{props.author.name}</b>
                    {props.author.updatedAt ?? props.author.createdAt}
                </span>
            </p>
            <p
                className={PostCSS.content}
                dangerouslySetInnerHTML={{
                    __html: props.content,
                }}
            />
            <p className={PostCSS.actionContainer}>
                <span className={PostCSS.action}>
                    <BsEmojiSmile />
                    {props.smiles ?? 0}
                </span>
            </p>
        </div>
    );
};

export default Post;
