import axios from 'axios';

const SHEET_ID = '17PWLkmnbXm_SbNvBQVuRgXQvWr3hvQMetvp9k8_m6Vw';
const RANGE = 'Sheet 1'; // Replace with your sheet's name if different
const API_KEY = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;

export const fetchSheetData = async () => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
    );
    return response.data.values;
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    return [];
  }
};
