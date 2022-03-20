import React from "react";
import MyPosts from "./MyPost/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return <div>
        <ProfileInfo />

        <MyPosts hey="yo" />
    </div>
}

export default Profile;