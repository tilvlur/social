import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://download-cs.net/steam/avatars/3412.jpg" alt="Ava"/>
            <span>{props.message}</span>
            <div>
                <span>likes:</span> {props.likeCount}
            </div>
        </div>
    );
}

export default Post;