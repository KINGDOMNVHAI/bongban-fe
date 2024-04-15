import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./assets/css/bootstrap.min.css"
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import TableTennis from './pages/TableTennis';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='main d-flex'>
        <div className='sidebarWrapper'>
          <Sidebar/>
        </div>

        <div className='content'>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/dashboard" exact={true} element={<Dashboard />} />
            <Route path="/table-tennis" exact={true} element={<TableTennis />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
