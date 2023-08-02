import './App.css';
import Form from './Form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Profile';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />}/>
            <Route path="/profile" element={<Profile />}/>
        </Routes>

        </BrowserRouter>

    </div>
  );
}

export default App;
