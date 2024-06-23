import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';

export default function Alert() {

  const context = useContext(AlertContext);
  const {alert} = context;
    const capitalize = (word)=>{
      if (word === "danger") return "Denied";
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '60px'}}>
    {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(alert.type)}: </strong> {alert.msg}
    </div>}
    </div>
  )
}
