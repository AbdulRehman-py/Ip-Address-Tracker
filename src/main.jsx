import './index.css'
import { createRoot } from 'react-dom/client';
import Nav from './nav.jsx';

const App = () => {
  return (
    <div>
        <Nav
        buttonIcon={
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        }
      />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


