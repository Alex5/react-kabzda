import React from 'react';
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={styles.content}>
            <div className={styles.profile__avatar}>
                <img
                    src={'https://cdn.vox-cdn.com/thumbor/l9l4iztkKVgnxD0vMmqYwknBZu4=/99x0:1179x810/1400x1400/filters:focal(99x0:1179x810):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg'}
                    alt="Jon Snow"/>
            </div>
            <div>
                <div>
                    <h3>Jon Snow</h3>
                </div>
                <div>
                    <h5>Description:</h5>
                    <p>Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince
                        of Dragonstone. From infancy, Jon is presented as the bastard son of Lord Eddard Stark, Lyanna's
                        brother, and raised alongside his lawful children at Winterfell, the seat of House Stark.</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;