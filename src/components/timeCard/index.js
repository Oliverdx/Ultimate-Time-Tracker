import {
  getMonthFromUTC,
  getDayFromUTC,
  getHourFromUTC
} from '@/utils/timeFormat';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

import styles from './styles.module.scss';

const TimeCard = ({time}) => {

  const getWorkedTime = () => {
    const worked = dayjs.duration(dayjs(time.exit).diff(time.start));
    const lunchbreak = dayjs.duration(dayjs(time.lunchreturn).diff(time.lunchexit));

    return worked.subtract(lunchbreak).format('HH:mm');
  };

  const  renderTime = (label, time) => {
    let timeStamp = time;
    const classlist = [styles.timeStamp__time];

    if(label === 'Trabalhado'){
      timeStamp = getWorkedTime();

      if(parseInt(timeStamp) < 8)
        classlist.push(styles.timeStamp__bellow);
      else
        classlist.push(styles.timeStamp__ontime);
    }

    return <div className={styles.timeStamp}>
      <span className={styles.timeStamp__label}>{label}</span>
      <p className={classlist.join(' ')}>{timeStamp}</p>
    </div>

  };

  return <div className={styles.cardWrapper}>
    <div className={styles.cardWrapper__date}>
      <p className={styles.cardWrapper__date__day}>{getDayFromUTC(time.day)}</p>
      <span className={styles.cardWrapper__date__month}>{getMonthFromUTC(time.day)}</span>
    </div>
    
    <div className={styles.cardWrapper__timesGrid}>
      {renderTime('Início', getHourFromUTC(time.start))}
      {renderTime('Almoço', getHourFromUTC(time.lunchexit))}
      {renderTime('Retorno', getHourFromUTC(time.lunchreturn))}
      {renderTime('Saída', getHourFromUTC(time.exit))}
      {renderTime('Trabalhado')}
    </div>

  </div>
};

export default TimeCard;