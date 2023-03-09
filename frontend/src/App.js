import './App.css';
import {HashRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './component/Header';
import Dashboard from './component/goals/Dashboard';
import './styles/header.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<div></div>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
