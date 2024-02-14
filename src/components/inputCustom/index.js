const InputCustom = ({label, type, inputClass, inputkey, value, setData}) =>
  <label className={inputClass}>
    {label}
    <input
     type={type}
     defaultValue={value}
     onChange={e => setData(inputkey, e.target.value)}/>
  </label>

export default InputCustom;