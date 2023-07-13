import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [view,setPreview] = useState('Preview');
  const handleUpClick= ()=>
  {
// console.log("Uppercased was clicked "+ text);
const newText=text.toUpperCase();
setText(newText );
props.showAlert("Converted to UpperCase","success");
  }
  const Clear= ()=>
  {
  setText("")
  props.showAlert("Text Succesfully Cleared","danger");
  }
  const handleLoClick= ()=>
  {
const newText=text.toLowerCase();
setText(newText );
props.showAlert("Converted to LowerCase","success");
  }
  const handleOnChange= (event)=>
  {
// console.log("on change");
setText(event.target.value);
  }
  const preview=()=>
  {
    if(view==='Unpreview')
    {
      setPreview('Preview');
      props.showAlert("Text UnPreviewd","success");
    }
    else
    {
     setPreview('Unpreview');
     props.showAlert("Text Previewd",'success');
    }
    
    
    // <p>{text.length>0?text:"enter something to preview it"}</p>
  }

  return (
    <>
    
     <div className='container' style={{color:props.mode==='dark'||'primary'||'danger'||'warning'||'success'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#090824'}} id="mybox" rows="10"></textarea>
         </div>
         <button type="button" disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
         <button type="button" disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
         {/* <button type="button"  disabled={text.length===0} className="btn btn-primary mx-2" onClick={res}>remove extra spaces</button> */}
         <button type="button"  disabled={text.length===0} className="btn btn-primary mx-2" onClick={Clear}>Clear Text</button>
    
    </div>
    <div className="container my-3 " style={{color:props.mode==='dark'||'primary'||'danger'||'warning'||'success'?'white':'#090824'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/(?:\n| )+/).filter((element)=>{return element.length!==0}).length} words and {" "}
              {text.length - (text.match(/\n/g) || []).length - (text.match(/ /g) || []).length } characters
           </p>
           {/* <p>{text.split(' ').join(',').split('\n').join(',').split(',').filter((element)=>{return element.length!==0}).length}</p> */}
           <p>{0.008 * text.split(/(?:\n| )+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
     
      <button type="button" class="btn btn-dark my-3" onClick={preview}>{view}</button>
    {/* <h1>Preview</h1> */}
         <p>{view==='Unpreview'?text:""}</p>
      {/* <p>{text.length>0?text:"Enter something to preview it"}</p> */}
    </div>
    </>
   

  )
}
