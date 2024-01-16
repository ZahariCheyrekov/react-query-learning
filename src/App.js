import { Link, Route, Routes, } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Home } from './components/Home';
import { ParallelQueries } from './components/ParallelQueries';
import { DynamicParallel } from './components/DynamicParallel';
import { DependentQueries } from './components/DependentQueries';
import { Planets } from './components/Planets';
import { RQPlanet } from './components/RQPlanet';
import { RQPlanets } from './components/RQPlanets';

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
          <Route path='/rq-parallel-queries' element={<ParallelQueries />} />
          <Route path='/rq-dynamic-parallel' element={<DynamicParallel planetIds={[8, 9]} />} />
          <Route path='/rq-dependent' element={<DependentQueries userId={3} />} />
          <Route path='/planets' element={<Planets />} />
          <Route path='/rq-planets' element={<RQPlanets />} />
          <Route path='/rq-planets/:planetId' element={<RQPlanet />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
