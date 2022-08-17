import React from 'react'
import styles from "./Input.module.css"

const InputControl = ({label,...props}) => {
  return (
    <div className={styles.continer}>
    {label && <label>{label}</label>}
    <input type="text" {...props}/>
    </div>
  )
}

export default InputControl