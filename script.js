document.addEventListener('DOMContentLoaded', () => {
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY; // GitHub Actions will inject this
    const sheetId = '17PWLkmnbXm_SbNvBQVuRgXQvWr3hvQMetvp9k8_m6Vw';
    const gid = '1148682294';
    const range = 'Sheet1'; // Adjust as needed
  
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        displayData(data.values);
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  
  function displayData(rows) {
    const container = document.getElementById('cards-container');
    rows.slice(1).forEach(row => { // Skip header row
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${row[0]}</h3>
        <p>Minimum Age: ${row[1]}</p>
        <p>Maximum Age: ${row[2]}</p>
        <p>Standardization Type: ${row[3]}</p>
        <p>Independent Ambulation: ${row[4]}</p>
        <p>Assisted Ambulation: ${row[5]}</p>
        <p>Non-Ambulatory: ${row[6]}</p>
        <p>Reference Type: ${row[7]}</p>
        <p>Time to Administer: ${row[8]} minutes</p>
        <p>Cost: ${row[9]}</p>
        <a href="${row[10]}" target="_blank">More Info</a>
      `;
      container.appendChild(card);
    });
  }
  