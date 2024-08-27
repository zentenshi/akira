import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './pages/header/Header';
import LandingPage from './pages/LandingPage/page/Landingage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
    
  );
}
  
export default App;
