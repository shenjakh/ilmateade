import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LocationsTable from './Components/Table';
import CityTable from './Components/CityTable';
import LinnaCard from './Components/Card';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleBackButtonClick = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '2em 0', color: '#2D3E40' }}>
        {selectedLocation ? selectedLocation.name : 'Ilma teade'}
      </h1>
      {/* <LinnaCard /> */}
      {selectedLocation ? (
        <CityTable selectedLocation={selectedLocation} />
      ) : (
        <LocationsTable setSelectedLocation={setSelectedLocation} />
      )}

      {selectedLocation && (
        <Button
          variant="contained"
          onClick={handleBackButtonClick}
          style={{ backgroundColor: '#387373', margin: '1em' }}>
          Tagasi
        </Button>
      )}
    </div>
  );
}

export default App;