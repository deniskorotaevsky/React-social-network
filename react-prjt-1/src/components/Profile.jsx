import React from "react";
import './Profile.css';

const Profile = () => {
    return <div className="content">

        <div>
            <img src="https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/26/20/2834700/2320e033e0d1e7097b594b757ab3cb5be8900b5c.jpg"></img>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
        </div>
        <div>
            New post
        </div>
        <div>
            <div className="item">
                post1
            </div>
            <div className="item">
                post2
            </div>
        </div>
    </div>
}

export default Profile;