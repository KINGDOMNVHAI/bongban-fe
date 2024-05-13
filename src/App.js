import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import "./assets/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Blade from './pages/Blade';
import BladeCreate from './pages/BladeCreate';
import BladeDetail from './pages/BladeDetail';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProductDetails from './pages/ProductDetails';
import ProductUpload from './pages/ProductUpload';

const MyContext = createContext();

function App() {

  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // setIsLogin if localStorage have token
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(()=>{
    if (themeMode === true) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode','light')
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode','dark')
    }
  },[themeMode]);

  // const location = useLocation();

  // useEffect(()=>{
  //   alert(location.pathname);
  // },[location])

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    themeMode,
    setThemeMode
  };

  useEffect(() => {
    // alert(isToggleSidebar)
  },[isToggleSidebar])

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHideSidebarAndHeader !== true &&
          <Header/>
        }
        <div className='main d-flex'>
          {
            isHideSidebarAndHeader !== true &&
            <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''}`}>
              <Sidebar/>
            </div>
          }

          <div className={`content  ${isHideSidebarAndHeader === true && 'full'} ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/login" exact={true} element={<Login />} />
              <Route path="/sign-up" exact={true} element={<SignUp />} />
              <Route path="/product/details" exact={true} element={<ProductDetails />} />
              <Route path="/product/upload" exact={true} element={<ProductUpload />} />

              <Route path="/blade-list" exact={true} element={<Blade />} />
              <Route path="/blade-detail" exact={true} element={<BladeDetail />} />
              <Route path="/blade-create" exact={true} element={<BladeCreate />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
