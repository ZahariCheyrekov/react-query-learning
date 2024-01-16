import { Link, Route, Routes, } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Home } from './components/Home';
import { InfiniteQueries } from './components/InfiniteQueries';
import { PaginationQueries } from './components/PaginationQueries';
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

          <Route path='/' element={<Home />} />
          <Route path='/rq-infinite' element={<InfiniteQueries />} />
          <Route path='/rq-pagination' element={<PaginationQueries />} />
          <Route path='/rq-parallel-queries' element={<ParallelQueries />} />
          <Route path='/rq-dynamic-parallel' element={<DynamicParallel planetIds={[8, 9]} />} />
          <Route path='/rq-dependent' element={<DependentQueries userId={3} />} />
          <Route path='/planets' element={<Planets />} />
          <Route path='/rq-planets' element={<RQPlanets />} />
          <Route path='/rq-planets/:planetId' element={<RQPlanet />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
