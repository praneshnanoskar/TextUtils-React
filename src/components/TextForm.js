import React,{useState} from 'react'
import PropTypes from 'prop-types';
export default function TextForm(props) {
    const handleUpClick=()=>
    {
    
        console.log("Uppercase was clicked"+text)
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleLoClick=()=>
    {
    
        console.log("Lowercase was clicked"+text)
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase!","success")
    }
    const handleOnChange=(event)=>
    {
        console.log("On change")
        console.log(event.target.value)
        setText(event.target.value)
    }
    const handleClearClick=(event)=>
    {
        console.log("On change")
  let newText=' ';
        setText(newText)
        props.showAlert("Text Cleared!","success")
    }
    const [text,setText]=useState("")
    //text="hello"  //wrong way to change state
   // setText("New Text")
    return (
        <>
        <div className="container" style={{color:props.mode1==='dark'?'white':'rgb(2 26 60)'}}>
            <h2 >{props.heading}</h2>
           <div className="mb-3">
 
  
  <textarea className="form-control"  onChange={handleOnChange} 
  style={{backgroundColor:props.mode1==='dark'?'grey':'white',
  color:props.mode1==='dark'?'white':'rgb(2 26 60)'}}
  value={text} id="myBox" rows="9"></textarea>
</div>

<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>



</div>
<div className="cantainer my-3" style={{color:props.mode1==='dark'?'white':'rgb(2 26 60)'}}>
    <h2>Your Text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes read time</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter a something in textbox above to preview it"}</p>
</div>
</>
    )
}
TextForm.propTypes={heading:PropTypes.string.isRequired}

