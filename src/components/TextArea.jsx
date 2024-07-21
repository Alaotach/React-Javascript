import React, {useState} from 'react';
import * as changeCase from 'change-case';
import './TextArea.css';

export default function TextArea(props){
  const [text, setText] = useState('')
  const [previousText, setPreviousText] = useState(null);
  const [redoText, setRedoText] = useState(null);
  const handleOnChange = (event) => {
    setText(event.target.value);
    setPreviousText(text);
    setRedoText(null); 
  }
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    setPreviousText(text);
    setRedoText(null); 
  }
  const handleLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    setPreviousText(text);
    setRedoText(null); 
  }
  const handleRemoveWhitespace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    setPreviousText(text);
    setRedoText(null); 
  }
  const handleCpCase = () => {
    let newText = text.split(" ");
    for (let i=0; i<newText.length; i++){
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(" "));
    setPreviousText(text);
    setRedoText(null); 
  }
  const handleCopy = () => {
    let textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    props.alert('Text copied to clipboard 📋!')
  }
  const sentenceCount = text.split(/[.!?:]+/).length-1;
  const handleSentenceCase = () => {
    let newestText = text.split(/(?=[.!?:])|(?<=[.!?:])/g);
    for (let i=0; i<newestText.length; i++){
      if (newestText[i].charAt(0) == " "){
        newestText[i] = newestText[i].charAt(1).toUpperCase() + newestText[i].slice(2);
      } else {
        newestText[i] = newestText[i].charAt(0).toUpperCase() + newestText[i].slice(1);
      }
    }
    newestText = newestText.join('').replace(/([.!?:])+/g, '$1 ').trim();
    setText(newestText);
    setPreviousText(text);
    setRedoText(null); 
  }
  const handleReverse = () => {
    let newText = text.split("");
    let newText2 = newText.reverse();
    setText(newText2.join(""));
    setPreviousText(text);
    setRedoText(null); 
  }
  
  const handleAltCase = () => {
    let newText = text.split("");
    for (let i=0; i<newText.length; i++){
      if (i%2 == 0){
        newText[i] = newText[i].toLowerCase();
      }
      else {
        newText[i] = newText[i].toUpperCase();
      }
    }
    setText(newText.join(""));
    setPreviousText(text);
    setRedoText(null); 
  }
  const handleInvCase = () => {
    let newText = text.split("");
    for (let i=0; i<newText.length; i++){
      if (newText[i] == newText[i].toLowerCase()){
        newText[i] = newText[i].toUpperCase();
      }
      else {
        newText[i] = newText[i].toLowerCase();
      }
    }
    setText(newText.join(""));
    setPreviousText(text);
    setRedoText(null); 
  }
  const handlePaste = () => {
    let textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("paste");
    textArea.remove();
  }
  const handleClear = () => {
    setText('');
    setPreviousText(text);
    setRedoText(null); 
    props.alert('Mera jivan kora kagaz kora hi reh gaya! 😂')
  }
  const handleEncodeB64 = () => {
    let newText = btoa(text);
    setText(newText);
    setPreviousText(text);
    setRedoText(null); 
  }
  const handleDecodeB64 = () => {
    let newText = atob(text);
    setText(newText);
    setPreviousText(text);
    setRedoText(null); 
  }
  const handleReplace = () => {
    let find = prompt("Enter the word to replace");
    let replace = prompt("Enter the word to replace with");
    let newText = text.replaceAll(find, replace);
    setText(newText);
    setPreviousText(text);
    setRedoText(null);
    props.alert(`Replaced ${find} with ${replace}!`)
  }
  const handleExtractLinks = () => {
    const regex = /(https?:\/\/[^\s]+)/g;
    const links = text.match(regex);
    if (links == null){
      setText("")
      setPreviousText(text);
      setRedoText(null); 
    }
    else{
      setText(links.join(" "));
      setPreviousText(text);
      setRedoText(null); 
    }
  }
  const handleExtractNum = () => {
    const regex = /\b[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?\b/g;
    const nums = text.match(regex);
    if (nums == null){
      setText("")
      setPreviousText(text);
      setRedoText(null); 
    }
    else{
    setText(nums.join(""));
      setPreviousText(text);
      setRedoText(null); 
    }
  }
  const handleExtractText = () => {
    const regex = /\b[^\d]+\b/g;
    const words = text.match(regex);
    if (words == null){
      setText("")
      setPreviousText(text);
      setRedoText(null); 
    }
    else{
    setText(words.join(" "));
      setPreviousText(text);
      setRedoText(null); 
    }
  }
  const handleUndo = () => {
    if (previousText !== null) {
      setRedoText(text); // Store current text for redo
      setText(previousText);
      setPreviousText(null); // Reset previousText after undoing
    props.alert('Undo Done!')
    }
  };
  const handleRedo = () => {
    if (redoText !== null) {
      setPreviousText(text); // Store current text for potential undo
      setText(redoText);
      setRedoText(null); // Clear redoText after redoing
    props.alert('Redo Done!')
    }
  };
  
  let wordCount = text.split(/[\s\n]+/).length;
  if (text.length == 0 || text[text.length-1] == " " || text[text.length-1] == "\n" || text[text.length-1] == "\r"){
    wordCount -= 1;
  }
  let lineCount = text.split(/\r\n|\r|\n/).length;
  if (text.length == 0){
    lineCount = 0;
  }
  
  return(
    <div className="container my-5">
      <h1>Enter your text here</h1>
      <div className="moving-border opacity-75">
        <div className='inputfield'>
          <textarea className="form-control opacity-100" id="myBox" value = {text} onChange = {handleOnChange} rows="8"></textarea>
        </div>
      </div>
    <div className='ms-3'>
      <button className="btn btn-primary mt-3 me-1 mb-5 clay-btn" onClick={handleClear}>Clear</button>
      <button className="btn btn-primary mx-1 mt-3 mb-5 clay-btn" onClick={handleUndo}>Undo</button>
      <button className="btn btn-primary mx-1 mt-3 mb-5 green-btn" onClick={handleRedo}>Redo</button>
      <button className="btn btn-primary my-1 me-2" onClick={handleSentenceCase}>Sentence case</button>
      <button className="btn btn-primary my-1 me-2" onClick={handleCpCase}>Capital Case</button>
      <button className="btn btn-primary my-1 me-2" onClick={handleUpCase}>UPPERCASE</button>
      <button className="btn btn-primary me-2 my-1" onClick={handleLowCase}>lowercase</button>
      <button className="btn btn-primary me-2 my-1" onClick={handleRemoveWhitespace}>Remove Whitespace</button>
      <button className="btn btn-primary me-2 my-1" onClick={handleAltCase}>aLtErNaTiNg cAsE</button>
      <button className="btn btn-primary me-2 my-1" onClick={handleInvCase}>InVeRsE CaSe</button>
      <button className="btn btn-primary me-2 my-1" onClick={handleCopy}>Copy</button>
      <button className="btn btn-primary me-2 my-1" onClick={handlePaste}>Paste</button>
      <button className="btn btn-primary me-2 my-1" onClick={handleReverse}>Reverse</button>
      <button className="btn btn-primary me-2 my-1" onClick={handleEncodeB64}>Encode Base64</button>
      <button className="btn btn-primary me-2 my-1" onClick={handleDecodeB64}>Decode Base64</button>
      <button className="btn btn-primary me-2 my-1" onClick={handleReplace}>Replace text </button>
      <button className="btn btn-primary me-2 my-1" onClick={handleExtractLinks}>Extract Links </button>
      <button className="btn btn-primary me-2 my-1" onClick={handleExtractNum}>Extract Numbers </button>
      <button className="btn btn-primary my-1" onClick={handleExtractText}>Extract Text </button>
    </div>

    <div className="container my-5">
      <h1> Your text summary</h1>
      <p> Charecter Count: {text.length} || Word Count: {wordCount} || Line Count: {lineCount} || Sentence Count: {sentenceCount}</p>
      <p>{(wordCount/238*60).toFixed(3)} seconds OR {(wordCount/238).toFixed(3)} minutes readtime</p>
      <h1 className="mt-5"> Preview </h1>
      <p>{text}</p>
    </div>
      
</div>

  );
}