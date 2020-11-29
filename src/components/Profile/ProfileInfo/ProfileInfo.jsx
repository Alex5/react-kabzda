import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import {PageHeader} from "antd";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.content}>
            <PageHeader
                className="site-page-header"
                onBack={() => {
                }}
                title={props.profile.fullName}
                subTitle=""
            />
            <div className={styles.profile__content}>
                <div className={styles.profile__avatar}>
                    <img
                        src={props.profile.photos.large}
                        alt="No photo"/>
                </div>
                <div>{props.isAuth ? "Followed" : "Unfollowed"}</div>
                <div className={styles.profile__content_body}>
                    <div className={styles.profile__body__info}>
                        <div><h3>Description:</h3></div>
                        <div><p>{props.profile.aboutMe}</p></div>
                    </div>
                    <div className={styles.profile__body__info}>
                        <div><h3>Contacts:</h3></div>
                        <div>
                            <div><a
                                href={props.profile.contacts.facebook}>
                                {props.profile.contacts.facebook ? `Facebook: ${props.profile.contacts.facebook}` : null}
                            </a>
                            </div>
                            <div>{props.profile.contacts.website}</div>
                            <div><a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>
                            <div>{props.profile.contacts.twitter}</div>
                            <div>{props.profile.contacts.instagram}</div>
                            <div>{props.profile.contacts.youtube}</div>
                            <div>{props.profile.contacts.github}</div>
                            <div>{props.profile.contacts.mainLink}</div>
                        </div>

                    </div>
                    <div className={styles.profile__body__info}>
                        <div><h3>Looking for a job:</h3></div>
                        <div>{props.profile.lookingForAJob ? `Yes` : `No`}</div>
                    </div>
                    <div className={styles.profile__body__info}>
                        <div><h3>Job
                            Description:</h3>
                        </div>
                        <div>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : `No job description`}</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProfileInfo;