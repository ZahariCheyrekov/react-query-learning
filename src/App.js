import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { RQPlanets } from './components/RQPlanets';
import { Planets } from './components/Planets';

import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/planets'>Planets</Link>
          </li>
          <li>
            <Link to='/rq-planets'>RQ Planets</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/planets' element={<Planets />} />
        <Route path='/rq-planets' element={<RQPlanets />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
