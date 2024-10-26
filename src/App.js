import './App.css';
import Homepage from './component/home/Homepage';
import Login from './component/Login/login'
import Register from './component/Register/register'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Homepage />  */}
      {/* <Login/> */}
      <BrowserRouter>
<Routes>
  <Route index element = { <Homepage/ >}/>
  <Route path="/log" element={<Login />} />
  <Route path="/reg" element={<Register />} />
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
