import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import "./assets/css/bootstrap.min.css"
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import TableTennis from './pages/TableTennis';

const MyContext = createContext();

function App() {

  const [isToggleSidebar, setIsToggleSidebar] = useState(false);

  const values = {
    isToggleSidebar,
    setIsToggleSidebar
  };

  useEffect(() => {
    // alert(isToggleSidebar)
  },[isToggleSidebar])

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header/>
        <div className='main d-flex'>
          <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Sidebar/>
          </div>

          <div className={`content ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/table-tennis" exact={true} element={<TableTennis />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
