import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  months: [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ]
});

export function getHourFromUTC(time){
  return dayjs(time).format('HH:mm');
}

export function getDayFromUTC(time){
  return dayjs(time).format('DD');
}

export function getMonthFromUTC(time){
  return dayjs(time).format('MMMM');
}