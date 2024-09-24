import React, { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';

import Filter from './components/Filter';
import Card from './components/Card';
import Header from './components/Header';
import Contributors from './components/Contributors';
import Mandates from './components/Mandates';


import './App.css';


function App() {
  const [data, setData] = useState([]); // All data from Google Sheets
  const [filteredData, setFilteredData] = useState([]); // Filtered data to be displayed
  const [filters, setFilters] = useState({
    age: '',
    standardizationType: [],
    focusAreas: [],
    ambulationType: [],
    referenceType: []
  });

  // Fetch data from Google Sheets API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY; // API key from .env
        const spreadsheetId = '17PWLkmnbXm_SbNvBQVuRgXQvWr3hvQMetvp9k8_m6Vw'; // Your sheet ID
        const range = 'Sheet 1'; // Sheet name or range like Sheet1!A1:Z100
        
        // Construct the API URL
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
        
        // Fetch the data
        const response = await fetch(url);
        const result = await response.json();
  
        // Log the result to inspect it
        console.log('API Response:', result);
  
        // Check if values exist in the result
        const rows = result.values;
        if (!rows || rows.length === 0) {
          console.error('No data found in the Google Sheet.');
          return;
        }
  
        // Parse rows to your data structure
        const parsedData = rows.slice(1).map((row) => ({
          name: row[0],
          minAge: parseFloat(row[1]), // Parse to float or integer
          maxAge: parseFloat(row[2]), // Parse to float or integer
          standardizationType: row[3],
          adaptiveBehaviors: row[4] === 'TRUE',
          ecologicalAssessments: row[5] === 'TRUE',
          grossMotorSkills: row[6] === 'TRUE',
          healthRelatedFitness: row[7] === 'TRUE',
          objectControlSkills: row[8] === 'TRUE',
          perceptualMotorFunction: row[9] === 'TRUE',
          preambulatoryBehaviors: row[10] === 'TRUE',
          sportsSkills: row[11] === 'TRUE',
          independentAmbulation: row[12] === 'TRUE',
          assistedAmbulation: row[13] === 'TRUE',
          nonAmbulatory: row[14] === 'TRUE',
          referenceType: row[15],
          timeToAdminister: row[16],
          cost: row[17],
          link: row[18]
        }));
  
        setData(parsedData);
        setFilteredData(parsedData); // Initially show all data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  // Function to apply filters to the data
  const applyFilters = () => {
    let filtered = data;

    // Filter by age
    if (filters.age) {
      filtered = filtered.filter(
        (item) =>
          filters.age >= item.minAge && filters.age <= item.maxAge
      );
    }

    // Filter by standardization type
    if (filters.standardizationType.length > 0) {
      filtered = filtered.filter((item) =>
        filters.standardizationType.includes(item.standardizationType)
      );
    }

    // Filter by focus areas
    if (filters.focusAreas.length > 0) {
      filtered = filtered.filter((item) => {
        return filters.focusAreas.some((area) => item[area]);
      });
    }

    // Filter by ambulation type
    if (filters.ambulationType.length > 0) {
      filtered = filtered.filter((item) => {
        return filters.ambulationType.some((ambulation) => item[ambulation]);
      });
    }

    // Filter by reference type
    if (filters.referenceType.length > 0) {
      filtered = filtered.filter((item) =>
        filters.referenceType.includes(item.referenceType)
      );
    }

    setFilteredData(filtered); // Update the filtered data to display
  };

  // Apply filters whenever the filters state changes
  useEffect(() => {
    applyFilters();
  }, [filters, data]);

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      age: '',
      standardizationType: [],
      focusAreas: [],
      ambulationType: [],
      referenceType: []
    });
  };

  return (
    <div className="App">
      <div className="layout">
        <div className="sidebar">
          <Header />
          <Filter filters={filters} setFilters={setFilters} clearFilters={clearFilters} />
          <Collapsible trigger="Individuals with Disabilities Education Act"> <Mandates /> </Collapsible>
          <Collapsible trigger="Our Contributors"> <Contributors /> </Collapsible>
        </div>
        <div className="card-container">
          {filteredData.map((row, index) => (
            <Card key={index} data={row} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
