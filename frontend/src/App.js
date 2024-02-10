
//import Nava from './components/navbar'; 
//import MyFetch from './hooks/useFetch';
//import Projects from './components/projects/projects';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteFunction from './components/pages/pages';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <RouteFunction/>
      </div>
    </Router>
  )
}

export default App;
//          <MyFetch />
          
//          <DataList /> 