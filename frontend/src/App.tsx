
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Home from "./home/Home";
import MainApp from "./MainApp/MainApp";
import CreateTask from "./components/CreateTask";


function App() {
  return (
    <>
          <Routes>

              <Route path="/"  element={<Home />} />
              <Route path="/app" element={<MainApp />} />
              <Route path="/app/create-task" element={<CreateTask />} />

          </Routes>
    </>
  );
}

export default App;

