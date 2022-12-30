import React, { useState } from "react";

export default function TextForm(props) {
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","success");
  }
  const handleSeClick = ()=>{
    let newText = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    setText(newText)
    props.showAlert("Converted to SentenceCase!","success");
  }
  const handleTiClick = ()=>{
    let newText = (str)=>{
      return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ');
  }
  setText(newText)
  props.showAlert("Converted to TitleCase!","success");
  }
  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
  }
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!","success");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1 style={{ color: props.mode==='light'?'black':'white' }}>{props.heading}</h1>
      <div className="form-group">
        <textarea
          style={{ backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='light'?'black':'white' }}
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleTiClick}>Convert to Titlecase</button>
      <button className="btn btn-primary mx-1" onClick={handleSeClick}>Convert to Sentencecase</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-5" style={{ color: props.mode==='light'?'black':'white' }}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Reading Time in Mints</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it here !"}</p>
    </div>
    </>
  );
}
