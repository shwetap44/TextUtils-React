import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }

    const handleLowClick = () =>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("on Change was clicked");
        setText(event.target.value);
    }

    const clearText = () =>{
        setText('');
        props.showAlert("Text Cleared", "success");
    }

    const copyText = () =>{
        const text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const checkIfCharacterIsEmpty = (char) =>{
        if( !char.trim().length ) {
            return true;
        }
        return false;
    }

  return (
    <>
    <div className="container" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light' ? 'white' : '#011f4e', 
            color: props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
        <h2>Your text summary</h2>
        <p>{text.trim().length === 0 ? 0 : text.trim().split(" ").length} words, 
        {checkIfCharacterIsEmpty(text) === true ? 0 : text.length} characters</p>
        <p>{text.trim().length === 0 ? 0 : 0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something in the textbox above to preview it here."}</p>
    </div>
    </>
  );
}
