import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [state, setstate] = useState(null);
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
        );
        const data = await response.json();
        setstate(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuote();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://amc-theatres-res.cloudinary.com/image/upload/c_lfill,f_auto,fl_lossy,g_auto,q_auto,w_1600/v1553002407/amc-cdn/general/287a3bb6-673e-40e8-84c4-df12a9fabf26/Star-Wars-logo-header.jpg-2000-1427.jpg' className="App-logo" alt="logo" />
        <p className='text'>{state && state.starWarsQuote}</p>
      </header>
    </div>
  );
};

export default App;
