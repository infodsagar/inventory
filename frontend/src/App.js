import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Navbar />
        <div className=''>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
