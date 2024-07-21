import React from 'react';

export default function Alert(props) {
  if (props.alert.message != null){
    return(
        <div className="alert alert-success" role="alert">{props.alert.message}</div>
    )
}
}