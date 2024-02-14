export const sendData = async (userId, data) => {
  
  const newData = formatData(data);

  return await fetch('/api/settime', {
    method: 'POST',
    body: JSON.stringify({'userId': userId, ...newData})
  })
}

export const formatData = (data) => {
  const {
    date,
    start,
    exit,
    lunchexit,
    lunchreturn
  } = data;

  return {
    'day': `${date}T00:00:00-03:00`,
    'start': `${date}T${start}:00-03:00`,
    'exit' : `${date}T${exit}:00-03:00`,
    'lunchexit' : `${date}T${lunchexit}:00-03:00`,
    'lunchreturn' : `${date}T${lunchreturn}:00-03:00`,
  };
}