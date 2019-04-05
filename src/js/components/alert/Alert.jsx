import React from 'react';

const Alert = (data) => {
  const { message } = data;
  return (
    <div>
      {message ?
        <p className="form alert_message">{message}</p>
        :
        null
      }
    </div>
  )
}


export default Alert
