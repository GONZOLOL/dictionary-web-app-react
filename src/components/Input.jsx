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
          setError(null);

          fetch(`${"https://api.dictionaryapi.dev/api/v2/entries/en/"}${word}`)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response;
            })
            .then( (data) => data.json() )
            .then(data => {
                setData(data)
            })
            .catch(error => {
                if (error.message === 'Network response was not ok') {
                    setError("Sorry pal, we couldn't find definitions for the word you were looking for.");
                    setData(null)
                } else {
                console.error('Error:', error);
                }
            });
                        
        }else {
          setError("Whoops, cant be empty...");
          setData(null)

        }
    }


    return (
        <>
            <section className="inputContainer">
                <form className="inputWrapper" onSubmit={submit}>
                    <input 
                        type="text" 
                        className={!error ? "input" : "input inputError"} 
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
                {error ? (<div className='downInputError'>{error}</div>) : ""}
            </section>
            {data ? (
                data.map((datos, i) => {
                    return (
                        <section key={i} className="dataResultWrapper">
                            <Phonetic result={datos} />
                            <Meaning result={datos} />
                            <Source result={datos} /> 
                        </section>

                    )})) : ""
            }
        </>
        
    )
}