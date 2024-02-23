
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Home from "./home/Home";
import MainApp from "./MainApp/MainApp";


function App() {
  return (
    <>
          <Routes>

              <Route path="/"  element={<Home />} />
              <Route path="/app" element={<MainApp />} />


          </Routes>
    </>
  );
}

export default App;

