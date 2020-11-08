import React from "react";
import styles from "./Messages.module.css";

const Messages = (props) => {

    let newMessage = React.createRef()

    let addPost = () => {
        let messageText = newMessage.current.value;
        alert(messageText)
    }

    return (
        <div className={styles.chat}>
            <div className={styles.header}>
            </div>
            <div className={styles.scrollbar__container}>
                <div className={styles.chat__body}>
                    <div className={styles.messages__message}>
                        <div className={styles.message__outgoing__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__incoming__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://image.flaticon.com/icons/png/512/194/194938.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__outgoing__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__incoming__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://image.flaticon.com/icons/png/512/194/194938.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__outgoing__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__incoming__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://image.flaticon.com/icons/png/512/194/194938.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__outgoing__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__incoming__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://image.flaticon.com/icons/png/512/194/194938.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__outgoing__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__incoming__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://image.flaticon.com/icons/png/512/194/194938.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__outgoing__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__incoming__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://image.flaticon.com/icons/png/512/194/194938.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__outgoing__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__incoming__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://image.flaticon.com/icons/png/512/194/194938.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__outgoing__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                        <div className={styles.message__incoming__item}>
                            <div className={styles.message__avatar}>
                                <img className="avatar"
                                     src="https://image.flaticon.com/icons/png/512/194/194938.png"
                                     alt=""/>
                                <div>Mirabelle Tow
                                    <div className="time">01:20 PM</div>
                                </div>
                            </div>
                            <div className="message-content">{props.message}</div>
                        </div>
                    </div>
                    <div className={styles.messages__area__input}>
                        <h5>Сообщение</h5>
                        <textarea ref={newMessage} placeholder={'Введите текст сообщения'}></textarea>
                        <button onClick={ addPost }>Отправить</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Messages;