import React from "react";
import { useState, useEffect } from "react";
import {ReactComponent as Search} from "../../starter_files/images/icon-search.svg";
import { dictionary } from '../api/dictionary';


export default function Input() {

    const [word, setWord] = useState("");
    const [phonetic, setPhonetic] = useState("");
    const [audio, setAudio] = useState("");
    const [partOfSpeech, setPartOfSpeech] = useState("");
    const [definition, setDefinition] = useState("");
    const [example, setExample] = useState("");
    const [synonyms, setSynonyms] = useState("");
    const [antonyms, setAntonyms] = useState("");
    const [source, setSource] = useState("");


    function submit(event) {
        event.preventDefault();
        const word = event.target.word.value;
    
        if (word){
          document.getElementById("error").innerHTML= "";
          document.getElementById("word").style.outline= "none";
          dictionary(word)
          .then( data => { dictionaryResult(data) } );
             
        }else {
          document.getElementById("error").innerHTML= "Please add a word!";
          document.getElementById("word").style.outline= "4px solid hsl(274, 82%, 60%)";
        }
    }

    const dictionaryResult = (data) => {

        console.log(data);

        data.forEach(data => {
            setWord(data.find(element => element == "word"));
        });
        console.log("word",word)
    }
    return (
        <>
            <section className="inputContainer">
                <form className="inputWrapper" onSubmit={submit}>
                    <input 
                        type="text" 
                        className="input"
                        id='word'
                        name='word'
                        size='20'
                        placeholder='Traduce a word here...'
                    />
                    <button 
                        type="submit"
                        className="iconSearch" 
                    >
                        <Search />
                    </button>
                </form>
                <div id='error'className='inputError' />
            </section>
        </>
    )
}