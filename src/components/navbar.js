import React from 'react'
import { Link } from "react-router-dom";

export default function navbar(props) {
  const chtr=()=>
  {
    props.setMode('danger');
    document.body.style.backgroundColor='#510519'
  }
  const chtg=()=>
  {
    props.setMode('success');
    document.body.style.backgroundColor='#1bd54a'
  }
  const chtb=()=>
  {
    props.setMode('primary');
    document.body.style.backgroundColor='#a8ccf2'
  }
  const chty=()=>
  {
    props.setMode('warning');
    document.body.style.backgroundColor='#f4e3a3'
  }
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode}`}>
  {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/* <Link className="nav-link" to ="/">Home<span className="sr-only">(current)</span></Link> */}
        <Link className="nav-link" to ="/">Home<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        {/* <Link className="nav-link" to ="/about">About</Link> */}
        <Link className="nav-link" to ="/about">About</Link>
      </li>
    </ul>
    
    <div className="dropdown mx-3" >
                <button className="btn btn-secondary dropdown-toggle" type="button" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Change Mode
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={chty}   type="button">Light Mode</button></li>
                  <li><button className="dropdown-item" onClick={chtb} type="button">Bluish Mode</button></li>
                  <li><button className="dropdown-item" onClick={chtr} type="button">Reddish Mode</button></li>
                  <li><button className="dropdown-item" onClick={chtg} type="button">greeenish Mode</button></li>
                </ul>
              </div>

        <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}  >
          <input type="checkbox" className="custom-control-input"  onClick={props.toggleMode} id="customSwitches"/>
          <label className="custom-control-label" htmlFor="customSwitches">Enable Dark Mode</label>
        </div>
  
</div>

</nav>
    </div>
  )
}
