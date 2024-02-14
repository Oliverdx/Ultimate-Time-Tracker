import { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from 'styles/tracker-page.module.scss';
import TrackerSidebar from 'components/trackerSidebar';
import InputTime from 'components/inputTime';
import TimeCard from 'components/timeCard';

import { sendData, formatData } from '@/utils/apiData';

const User = ({ userId, times }) => {

  const [userTimes, setUserTimes] = useState([]);

  useEffect(() => {
    setUserTimes(times);
  },[]);

  const addTime = async (data) => {
    console.log('Data: ', data);
    try{
      await sendData(userId, data);
      setUserTimes([...userTimes, formatData(data)]);
    }catch(err){
      console.log('Err', err);
    }
    
  };

  return <div className={styles.container}>
     <TrackerSidebar />
     <div className={styles.tracker}>
       <div className={styles.tracker__form}>
        <Image 
          src="/icons/logo_white.svg"
          alt="Logo white letters"
          width="230"
          height="55"
          className={styles.form__logo}
        />
        <InputTime updateTime={addTime} />
       </div>
       <div className={styles.tracker__dashboard}>
          {userTimes?.map(time => <TimeCard time={time} key={time.id}/>)}
       </div>
     </div>
  </div>};

  
export async function getServerSideProps({ res, params }) {

  const data = await fetch(`http://localhost:3000/api/gettimes?user=${params.id}`);

  if(data.status !== 200){
    res.writeHead(404, { Location: '/404' })
    res.end();
    return {props: {}}
  }

  const response = await data.json();
  return { props: 
    { userId: params.id ,times: response.times }
  }

}

export default User;