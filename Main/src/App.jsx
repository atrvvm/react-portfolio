/* TEMP
import "./App.css";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="page-content">
      <Header />
    </div>
  )
}; */

// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router';
import Header from "./components/Header";
import "./App.css";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className="app-content">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
