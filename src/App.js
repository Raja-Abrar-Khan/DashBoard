import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Analytics from './components/Analytics';
import Layout from './components/Layout';
function App() {
  return (
    <div className="flex flex-col">
      <div><Navbar/></div>
      <div><Layout/></div>
      </div>
    
  );
}

export default App;
