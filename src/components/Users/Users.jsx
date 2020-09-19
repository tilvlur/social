import React from "react";
import styles from "./Users.module.css"
import { setUsersAC } from "../../redux/users-reducer";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render = () => {
        return <div>
            {
                this.props.users.map(u =>
                    <div className={styles.cardWrapper} key={u.id}>
                        <div>
                            <img className={styles.userPhoto}
                                 src={u.photos.small != null ? u.photos.small : userPhoto} />
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={styles.innerDesc}>
                            <div className={styles.fullName}>{u.name}</div>
                            <div className={styles.status}>{u.status}</div>
                            <div className={styles.location}><p>{'u.location.city'}, {'u.location.country'}</p></div>
                        </div>
                    </div>)
            }
        </div>
    }
}

export default Users;