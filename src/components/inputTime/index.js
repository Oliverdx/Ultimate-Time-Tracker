import { useState } from 'react';
import InputCustom from '../inputCustom';

import styles from './styles.module.scss';

const InputTime = ({ updateTime }) => {

  const initialData = {
    date: '2021-01-01',
    start: '',
    exit: '',
    lunchexit: '',
    lunchreturn: ''
  };

  const [formData, setFormData] = useState(initialData);

  const setData = (inputkey, value) => {
    const data = formData;
    data[inputkey] = value;
    setFormData(data);
  };

  const submitData = evt => {
    evt.preventDefault();
    updateTime(formData);
  }

  return <form className={styles.inputTime} onSubmit={submitData}>
    <InputCustom
      label="Data"
      type="date"
      inputClass={styles.inputTime__date}
      inputkey="date"
      defaultValue={formData["date"]}
      setData={setData}
    />
    <InputCustom
      label="Início"
      type="time"
      inputClass={styles.inputTime__start}
      inputkey="start"
      defaultValue={formData["start"]}
      setData={setData}
    />
    <InputCustom
      label="Saída"
      type="time"
      inputClass={styles.inputTime__exit}
      inputkey="exit"
      defaultValue={formData["exit"]}
      setData={setData}
    />
    <InputCustom
      label="Almoço"
      type="time"
      inputClass={styles.inputTime__lunchexit}
      inputkey="lunchexit"
      defaultValue={formData["lunchexit"]}
      setData={setData}
    />
    <InputCustom
      label="Retorno"
      type="time"
      inputClass={styles.inputTime__lunchreturn}
      inputkey="lunchreturn"
      defaultValue={formData["lunchreturn"]}
      setData={setData}
    />
    <input type="submit" className={styles.inputTime__submit} value="Enviar" />
 </form>
};

export default InputTime;