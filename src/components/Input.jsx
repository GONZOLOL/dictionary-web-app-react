import React from "react";
import { useState, useEffect } from "react";
import {ReactComponent as Search} from "../../starter_files/images/icon-search.svg";
import { Phonetic } from "./Phonetic";
import { Meaning } from "./Meaning";
import { Source } from "./Source";

export default function Input() {

    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    
    function submit(event) {
        event.preventDefault();
        const word = event.target.word.value;
        
        if (word){
          document.getElementById("error").innerHTML= "";
          document.getElementById("word").style.outline= "none";

          fetch(`${"https://api.dictionaryapi.dev/api/v2/entries/en/"}${word}`)
          .then( (data) => data.json() )          
          .then( (data) => setData(data[0]) )
          .catch( (error) => setError(error) )
             
        }else {
          document.getElementById("error").innerHTML= "Whoops, cant be empty...";
          document.getElementById("word").style.outline= "1px solid red";
        }
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
            {data ? (
                <section className="dataResultWrapper">
                    <Phonetic result={data} />
                    <Meaning result={data} />
                    <Source result={data} /> 
                </section>
            ) : ""  }
        </>
        
    )
}