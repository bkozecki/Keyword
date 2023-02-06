import React from "react";

import "./SearchResult.style.scss";

const SearchResult = ({ meanings, word }) => {
  return (
    <div className="meanings">
      {word && meanings[0] && (
        <div className="meanings_title">
          <div>
            <h1 className="meanings_word">{meanings[0].word}</h1>
            <h3 className="meanings_phon">
              {!meanings[0].phonetics[0]
                ? ""
                : meanings[0].phonetics[0].text ||
                  meanings[0].phonetics[1].text}
            </h3>
          </div>

          <audio controls className="meanings_audio">
            <source
              src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
      {word === "" ? (
        <h1 style={{ margin: "auto" }}>Start by typing in the search bar</h1>
      ) : (
        meanings.map((mean) => (
          <div className="meanings_content">
            <span className="meanings_content_heading">Meaning:</span>
            {mean.meanings.map((data) => (
              <div>
                {data.definitions.map((def) => (
                  <div className="definition_wrap">
                    <ul>
                      <li style={{ padding: "1rem" }}>{def.definition}</li>
                    </ul>
                    {def.example && (
                      <span>
                        <span style={{ color: "#c85c8e", fontWeight: "700" }}>
                          Example:{" "}
                        </span>
                        {def.example}
                      </span>
                    )}
                    {def.synonyms.length > 0 && (
                      <span>Synonyms: {def.example}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResult;
