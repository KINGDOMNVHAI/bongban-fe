import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import "./assets/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Blade from './pages/Blade';
import BladeCreate from './pages/BladeCreate';
import BladeDetail from './pages/BladeDetail';
import Brand from './pages/Brand';
import BrandCreate from './pages/BrandCreate';
import BrandDetail from './pages/BrandDetail';
import Dashboard from './pages/Dashboard';
import Line from './pages/Line';
import LineCreate from './pages/LineCreate';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProductDetails from './pages/ProductDetails';
import ProductUpload from './pages/ProductUpload';
import TransactionReport from './pages/TransactionReport';
import TransactionDetail from './pages/TransactionDetail';

const MyContext = createContext();

function App() {

  // Check login
  const token = localStorage.getItem("jwtToken");
  // if (token == null || token == undefined) navigate("/login");

  const [isLogin, setIsLogin] = useState(false); // setIsLogin if localStorage have token
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
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
    if (token != null || token != undefined) {
      setIsLogin(true)
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

              <Route path="/brand-list" exact={true} element={<Brand />} />
              <Route path="/brand-create" exact={true} element={<BrandCreate />} />

              <Route path="/brand-detail">
                <Route path=":brandCD" exact={true} element={<BrandDetail />} />
              </Route>

              <Route path="/blade-list" exact={true} element={<Blade />} />
              <Route path="/blade-create" exact={true} element={<BladeCreate />} />

              <Route path="/blade-detail">
                <Route path=":unitID" exact={true} element={<BladeDetail />} />
              </Route>

              <Route path="/line-list" exact={true} element={<Line />} />
              <Route path="/line-create" exact={true} element={<LineCreate />} />

              <Route path="/transaction-report" exact={true} element={<TransactionReport />} />
              <Route path="/transaction-detail/:id" exact={true} element={<TransactionDetail />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
