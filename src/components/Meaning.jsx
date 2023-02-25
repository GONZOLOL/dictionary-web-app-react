
export const Meaning = ({ result }) => {
    return (
      <>
        {result.meanings.map((meaning, i) => {
            return (
                <div key={i}>
                <div>{meaning.partOfSpeech}</div>
                <div className="muted">Meaning</div>
                <div className="listContainer">
                    {   meaning.definitions.map((def, index) => (
                            <ul key={index}>
                                <div className="styledList">
                                <span className="bullet"/>
                                <span>{def.definition}</span>
                                </div>
                                {def.example && (
                                <li className="sub">
                                    <span>{def.example}</span>
                                </li>
                                )}
                            </ul>
                        ))  
                    }
                </div>
                <div>
                    {   meaning.synonyms.length ? (
                            <div>
                                <h2 className="muted">Synonyms</h2>
                                <div>
                                    {meaning.synonyms.map((synonym, i) => (
                                    <h2 key={i} className="accent"> {synonym} </h2>
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
  