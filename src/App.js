import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import HomePage from "./routes/HomePage";
import About from "./components/About";

import './App.css';

function App() {
  return (
    <div className="h-screen flex flex-col overflow-auto bg-[#121212]">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
