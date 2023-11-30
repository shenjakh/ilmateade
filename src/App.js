import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LocationsTable from './Components/Table';
import CityTable from './Components/CityTable';
import ModalCoordinates from './Components/ModalCoordinates';
import SearchHandler from './Components/SearchHandler';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleBackButtonClick = () => {
    setSelectedLocation(null);
  };

  const handleSearch = ({ kohanimi, lat, lon }) => {
    SearchHandler({ kohanimi, lat, lon, setSelectedLocation });
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
      {!selectedLocation && <ModalCoordinates onSearch={handleSearch} />}
    </div>
  );
}

export default App;