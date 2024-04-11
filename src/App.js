import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Dashboard />} />
        <Route path="/dashboard" exact={true} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
