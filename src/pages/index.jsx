import Image from 'next/image';
import styles from 'styles/home-page.module.scss';
import UserLogin from 'components/userLogin';

const Home = ({ users }) => {

  return (
    <div className={styles.container}>
      <Image src="/icons/logo_orange.svg"
        alt="User Picture"
        width="371"
        height="88"
      />
      <div id="userlist" className={styles.usersWrapper}>
        {users?.map(user =>
          <UserLogin user={user} key={user.id}/>
        )}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/gettimes');
  const users = await res.json();

  return { props: { users } }
}

export default Home;