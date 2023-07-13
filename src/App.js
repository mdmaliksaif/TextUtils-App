// import logo from './logo.svg';
import './App.css';
// import PropTypes from 'prop-types'
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
const [mode , setMode] = useState('light');
const [alert, setAlert] = useState(null);

 const showAlert=(message,type)=>
{
  setAlert(
    {
    msg:message, 
    type:type
    }
  )
  setTimeout(() => {
    setAlert(null);
  },1500);
}

const toggleMode=()=>
{
  if(mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor='#090824'
    
    document.title='TextUtils -DarkMode';
    showAlert("Dark Mode Enabled","success");
  }
  else
  {
    setMode('light');
      document.body.style.backgroundColor='white'
      document.title='TextUtils -LightMode';
      showAlert("Light Mode Enabled","success");
  }
}
  return (
   <>
<Router>
   <Navbar title ='TextUtils' mode={mode} toggleMode={toggleMode} setMode={setMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading ="Text Analyser Box" mode={mode} />} />
  </Routes>
        </div>
   </Router>
  {/* //  <TextForm showAlert={showAlert} heading ="Text Analyser Box" mode={mode} /> */}
      </>
  );
}

export default App;
