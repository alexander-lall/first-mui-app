import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import SearchAppBar from './components/appbar/search-appbar.component';

import Home from './routes/home/home.component';
import Details from './routes/details/details.components';

function App() {
  return (
    <Fragment>
      <SearchAppBar/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/:id' element={ <Details/> }/>
      </Routes>
    </Fragment>
    );
  }

export default App;
