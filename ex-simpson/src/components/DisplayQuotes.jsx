import React from 'react';

function DisplayQuotes({ quotes }) {
    return (
        <div className="DisplayQuotes">
            
            <div>Character: {quotes.character}</div>
            <div>Quote: {quotes.quote}</div>
            
            <img src={quotes.image} alt={quotes.character}/>
        </div>
    )
}

export default DisplayQuotes;