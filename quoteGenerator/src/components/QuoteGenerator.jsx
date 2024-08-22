import { useState, useEffect } from "react";
import "./QuoteGenerator.css";

export default function QuoteGenerator() {
    const [quotes, setQuotes] = useState([]);
    const [currentQuote, setCurrentQuote] = useState(null);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
            .then(response => response.json())
            .then(data => {
                setQuotes(data.quotes);
                getRandomQuote(data.quotes);
            })
            .catch(err => {
                setCurrentQuote({ err });
            });
    }, []);

    function getRandomQuote(quoteArray = quotes) {
        if (quoteArray.length > 0) {
            const randomIndex = Math.floor(Math.random() * quoteArray.length);
            setCurrentQuote(quoteArray[randomIndex]);
        }
    }

    return (
        <>
            <div className="quote-wrapper">
                {currentQuote && (
                    <p>
                        {currentQuote.quote} - {currentQuote.author}
                    </p>
                )}
            </div>
            <button onClick={() => getRandomQuote()} className="quote-button">Klicke für neues Zitat</button>
        </>
    )
}