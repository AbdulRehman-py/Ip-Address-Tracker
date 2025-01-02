import "./App.css"
import { useState } from "react";


const Nav = ({buttonIcon, onSearch}) => {


  const [ipAddress, setIpAddress] = useState('');
  

  function handleSubmit(e) {
    e.preventDefault();
    if (validateIpAddress(ipAddress)) {

      onSearch(ipAddress);
    } else {
      alert('Invalid IP address');

    }
  };
  
   


  const validateIpAddress = (ip) => {
    const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ip);
  };

  return (
    <nav id="nav">
      <h1>Ip Address Tracker</h1>
      <div className="input-button">
        <form >
          <input value={ipAddress} onChange={(e)=> {setIpAddress(e.target.value)}} type="text" placeholder="Search for any IP address or domain" />
        </form>
        <button onClick={handleSubmit} type="submit">{buttonIcon}</button>
        
        </div>
      
    </nav>
  );
};

export default Nav;