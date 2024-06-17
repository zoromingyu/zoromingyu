import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./routes/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/LogIn";

import './App.css';

function App() {
  return (
    <div className="h-screen flex flex-col overflow-auto bg-[#0C1D32]">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
