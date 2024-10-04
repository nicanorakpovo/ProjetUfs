import "./App.css";
import Register from "./Register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/login";
import Sidebar from "./Dashboard/sidebar";
import Navbar from "./Dashboard/navbar";
import Content from "./Dashboard/content";
// import Message from './Message/message'

const Dashboard = () => {
  return (
    <div>
      {/* Conteneur principal avec la sidebar et le contenu */}
      <div className="d-flex">
        <Sidebar />
        <div className="d-block offset-1">
          {/* Intégration de la barre de navigation */}
          <Navbar />
          <Content />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
