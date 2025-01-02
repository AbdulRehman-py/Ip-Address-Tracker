import './ipdata.css';

const Ipdata = ({ ip, city, timezone, org }) => {
  return (
    <div id="ipdata-container">
      <div className="data">
        <h3>IP Address</h3>
        <span>{ip}</span>
      </div>
      <div className="data">
        <h3>Location</h3>
        <span>{city}</span>
      </div>
      <div className="data">
        <h3>Timezone</h3>
        <span>{timezone}</span>
      </div>
      <div className="data">
        <h3>ISP</h3>
        <span>{org}</span>
      </div>
    </div>
  );
};

export default Ipdata;