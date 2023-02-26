
export const Meaning = ({ result }) => {
    return (
      <>
        {result.meanings.map((meaning, i) => {
            return (
                <div key={i}>
                <div className="partOfSpeechContainer">
                    <span className="partOfSpeech">{meaning.partOfSpeech}</span>
                </div>
                <div className="meaning">Meaning</div>
                <div className="listContainer">
                    {   meaning.definitions.map((def, index) => (
                            <ul key={index}>
                                <div className="styledList">
                                    <span className="bullet"/>
                                    <span>{def.definition}</span>
                                </div>
                                {def.example && (
                                <li className="example">
                                    <span>"{def.example}"</span>
                                </li>
                                )}
                            </ul>
                        ))  
                    }
                </div>
                <div>
                    {   meaning.synonyms.length ? (
                            <div className="synonymsContainer">
                                <h2 className="synonymsWord">Synonyms</h2>
                                <div className="synonyms">
                                    {meaning.synonyms.map((synonym, i) => (
                                    <h2 key={i} className="activeSynonyms"> {synonym} </h2>
                                    ))}
                                </div>
                            </div>
                        ) : ("")
                    }
                </div>
            </div>
          );
        })}
      </>
    );
  };
  