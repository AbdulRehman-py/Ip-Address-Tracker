import Nav from './nav.jsx';
import Ipdata from './Ipdata.jsx';

const App = () => {
  return (
    <div id='app'>
      <Nav
        buttonIcon={
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        }
      />
        <Ipdata />
        </div>
    
  );
};

export default App;