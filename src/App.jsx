import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => {
        setQuote(response.data[0]);
      })
      .catch(error => {
        console.error('Error fetching the quote:', error);
      });
  }, []);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-4">
      <div className="w-1/2 bg-white shadow-gray-700 shadow-2xl rounded-2xl p-8 transition-transform transform hover:scale-110">
        <h2 className="xl:text-5xl lg:text-4xl md:text-4xl text-3xl font-bold text-center text-gray-800 mb-6">Ron Swanson Quote</h2>
        <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-gray-600 text-center italic">{quote}</p>
      </div>
    </div>
  );
}

export default App;
