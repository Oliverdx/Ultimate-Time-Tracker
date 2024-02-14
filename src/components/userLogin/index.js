import Image from 'next/image';
import styles from './styles.module.scss';

const UserLogin = ({user}) => {
  return <div className={styles.user}>
    <Image 
        src="/icons/user.svg"
        alt="User Picture"
        width="116"
        height="116"
        className={styles.user__image}
      />
    <h2 className={styles.user__name}>{user.name}</h2>
    <a
      href={`/user/${user.id}`}
      className={styles.user__loginBtn}
    >
      <Image
        src="/icons/login.svg"
        alt="Login Button"
        width="36"
        height="31"
      />
    </a>
  </div>
};

export default UserLogin;