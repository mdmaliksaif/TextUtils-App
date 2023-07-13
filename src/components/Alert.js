import React from 'react'

export default function Alert(props) {
  const Capitalize=(word)=>
  {
  const Lower=word.toLowerCase();
  return Lower.charAt(0).toUpperCase() + Lower.slice(1);
  }
  return (
    <div style={{height:'px'}}>

    {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
               <strong>{Capitalize(props.alert.type)}</strong>    <strong>{props.alert.msg}</strong> 
    </div>
}
</div>
  )
}
