import React, {useState} from 'react'


export default function Textform(props) {
    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }    

    const handleSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed from text!","success");

    }

    const handleClClick =()=>{
        let newText= "";
        setText(newText);
        props.showAlert("Text Cleared!","success");

    }


    const handleUpClick =() =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");

    }
    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText);   
        props.showAlert("Converted to LowerCase!","success");

    }
    const HandleOnChange =(event) =>{
      setText(event.target.value)
    }
    const [text,setText] = useState('')
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control me-2" value = {text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-2 " onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary my-2" onClick={handleClClick}>Clear Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-2 " onClick={handleSpace}>Remove Spaces</button>
        </div>  
    </div>
    <div className='container my-2' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008*text.split(" ").length} Minutes it takes to read this text</p>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:'Enter text in text-box to preview here'}</p>
    </div>
    </>
  )
}

