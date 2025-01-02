import "./Ipdata.css";

const Ipdata = () => {
  return (
    <div id="ipdata-container">
      <div className="data">
        <h3>Ip address</h3>
        <span>{"192.100.198"}</span>
      </div>
      <div className="data">
        <h3>Location</h3>
        <span>{"New York, NY 10001"}</span>
      </div>
      <div className="data">
        <h3>Timezone</h3>
        <span>{"UTC -05:00"}</span>
      </div>
      <div className="data">
        <h3>Isp</h3>
        <span>{"SpaceX Starlink"}</span>
      </div>
    </div>
  );
};

export default Ipdata;
