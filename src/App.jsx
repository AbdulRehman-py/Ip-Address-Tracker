import Nav from './nav.jsx';
import Ipdata from './IpData.jsx';
import Map from './Map.jsx';
import { useState, useEffect } from 'react';

const App = () => {

  const [ipAddress, setIpAddress] = useState({
    ip: '',
    timezone: '',
    org: '',
    city: ''
  });

  async function  fetchIpData(ipAddress = '') {
    try {
        const url = ipAddress 
        ? `https://ipinfo.io/${ipAddress}?token=b5ccb8626e6152` 
        : 'https://ipinfo.io/json?token=b5ccb8626e6152';
        const response = await fetch(url);
        const data = await response.json();
        setIpAddress({
          ip: data.ip,
          timezone: data.timezone,
          org: data.org,
          city: data.city
        });
    } catch (error) {
      console.error('Failed to fetch ip data', error);
    
  }
  };

  useEffect(() => {
    fetchIpData(); // Fetch initial data on component mount
  }, []);

  const handleSearch = (ipAddress) => {
    fetchIpData(ipAddress); // Fetch data based on user input
  };




  return (
    <div id='app'>
      <Nav
        buttonIcon={
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        }
        onSearch={handleSearch}
      />
        <div className="content">
        <Ipdata {...ipAddress} />
        <Map />
      </div>

        </div>
    
  );
};

export default App;