import Navbar from './Components/Navbar';
import LogIn from './Components/LogIn';
import Tests from './Components/Tests';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className='bg-white'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tests />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
