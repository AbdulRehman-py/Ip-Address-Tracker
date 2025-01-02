import "./App.css"
const Nav = ({buttonIcon}) => {
  return (
    <nav id="nav">
      <h1>Ip Address Tracker</h1>
      <div className="input-button">
        <form action="submit">
          <input  type="text" placeholder="Search for any IP address or domain" />
        </form>
        <button type="submit">{buttonIcon}</button>
        </div>
      
    </nav>
  );
};

export default Nav;