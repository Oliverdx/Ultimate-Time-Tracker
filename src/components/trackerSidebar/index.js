import Image from 'next/image';
import styles from './styles.module.scss';

const TrackerSidebar = () => {
  return <div className={styles.sidebar}>
  <Image 
      src="/icons/user.svg"
      alt="User Picture"
      width="85"
      height="85"
      className={styles.sidebar__userimg}
    />
    <a href="/" className="sidebar__exitBtn">
      <Image
        src="/icons/logout.svg"
        alt="Login Button"
        width="36"
        height="31"
      />
    </a>
 </div>
};

export default TrackerSidebar;