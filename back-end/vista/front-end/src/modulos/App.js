
import '../App.css';
import Home from "./home"
import {BrowserRouter as Router,Routes,Route,link} from 'react-router-dom';


function App() {
  return (
    <Router>
    
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
);
}

export default App;