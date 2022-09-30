import React, {useCallback, useEffect, useState} from 'react';
import { BsEmojiSmile } from "react-icons/bs";
import axios from 'axios';
import * as CommonCSS from '../../../../assets/styles/common.module.scss';
import * as PostCSS from './Post.module.scss';

export interface PostProps {
    id: number | string;
    slug: string;
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

const getSmiles = async (slug: string): Promise<number> => {
    try {
        const response = await axios.get(`http://${process.env.GATSBY_API_SERVER}:9090/smile?slug=${slug}`);
        if (response.status === 200) {
            return response.data.smiles as number;
        }
    } catch (e) {
        console.error(e as Error);
    }
    return 0;
};

const addSmile = async (slug: string): Promise<void> => {
    try {
        await axios.post(`http://${process.env.GATSBY_API_SERVER}:9090/smile`, {
            slug,
        });
    } catch (e) {
        console.error(e as Error);
    }
};

const Post = (props: PostProps) => {
    const [smiles, setSmiles] = useState(props.smiles ?? 0);

    useEffect(() => {
        getSmiles(props.slug).then(setSmiles);
    }, []);

    const addSmilesToThisPost = useCallback(() => {
        addSmile(props.slug);
        setSmiles((smiles) => smiles + 1);
    }, [props.slug]);

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
                <span
                    className={PostCSS.action}
                    tabIndex={0}
                    role="button"
                    onClick={addSmilesToThisPost}
                >
                    <BsEmojiSmile />
                    {smiles}
                </span>
            </p>
        </div>
    );
};

export default Post;
