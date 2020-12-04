/*
import React from 'react';
import styles from './ProfileInfo.module.css'
import userPhoto from "../../../assets/images/userPhoto.png"
import {Input} from "antd";
import Preloader from "../../common/preloader/Preloader";


class ProfileInfo extends React.Component {

    componentDidMount() {
        if (!this.props.profile) {
            return <Preloader/>
        }
    }

    render() {
        return (
            <div className={styles.content}>
                <div><h1>{this.props.fullName}</h1></div>

                <div className={styles.profile__content}>

                    <div className={styles.profile__avatar}>

                        <img src={this.props.profile.photos.large ? this.props.profile.photos.large : userPhoto} alt=""/>
                        <div><Input
                            value={`Write status here`}
                        /></div>
                    </div>

                    <div className={styles.profile__content_body}>
                        <div className={styles.profile__body__info}>
                            <div><h3>Description:</h3></div>
                            <div><p>{this.props.profile.aboutMe}</p></div>
                        </div>
                        <div className={styles.profile__body__info}>
                            <div><h3>Contacts:</h3></div>
                            <div>
                                <div><a
                                    href={this.props.profile.contacts.facebook}>
                                    {this.props.profile.contacts.facebook ? `Facebook: ${this.props.profile.contacts.facebook}` : null}
                                </a>
                                </div>
                                <div>{this.props.profile.contacts.website}</div>
                                <div><a href={this.props.profile.contacts.vk}>{this.props.profile.contacts.vk}</a></div>
                                <div>{this.props.profile.contacts.twitter}</div>
                                <div>{this.props.profile.contacts.instagram}</div>
                                <div>{this.props.profile.contacts.youtube}</div>
                                <div>{this.props.profile.contacts.github}</div>
                                <div>{this.props.profile.contacts.mainLink}</div>
                            </div>

                        </div>
                        <div className={styles.profile__body__info}>
                            <div><h3>Looking for a job:</h3></div>
                            <div>{this.props.profile.lookingForAJob ? `Yes` : `No`}</div>
                        </div>
                        <div className={styles.profile__body__info}>
                            <div><h3>Job
                                Description:</h3>
                            </div>
                            <div>{this.props.profile.lookingForAJobDescription ? this.props.profile.lookingForAJobDescription : `No job description`}</div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default ProfileInfo;*/

import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'Profile avatar'}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;