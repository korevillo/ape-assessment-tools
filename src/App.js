import React, { useEffect, useState } from 'react';
import { fetchSheetData } from './api/googleSheets';
import Card from './components/Card';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const rows = await fetchSheetData();
      setData(rows);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz Cards</h1>
      </header>
      <div className="card-container">
        {data.map((row, index) => (
          <Card key={index} data={row} />
        ))}
      </div>
    </div>
  );
}

export default App;
