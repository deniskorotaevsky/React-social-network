import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    debugger;
    return (
        <div className={s.postBlock}>
           <h3>My posts</h3> 
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>

            <div className={s.posts}>
                <Post message="Hi, how are you?" />
                <Post message="It's my first post" />
                <Post message2="like-15" />
                <Post message2="like-20" />
            </div>
        </div>

    )
}

export default MyPosts;