import { Link, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import { Home } from './components/Home';
import { RQPlanets } from './components/RQPlanets';
import { Planets } from './components/Planets';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
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
    </QueryClientProvider>
  );
}

export default App;
