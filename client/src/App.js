import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './components/About';
import Buy from './components/Buy';
import Contact from './components/Contact';
import EditForm from './components/EditForm';
import Form from './components/Form'
import Home from './components/Home';
import Inventory from './components/Inventory';
import Machine from './components/Machine';
import Sell from './components/Sell';
import Service from './components/Service';

function App() {
  return (
    <div className="flex pt-2 pb-2 justify-evenly h-screen w-screen mx-auto App">
      <BrowserRouter>
        <div className='flex w-1/6 justify-center'>
          <Navbar />
        </div>
        <div className='w-3/6 '>
          <Routes >
            <Route path='/about' element={<About />} />
            <Route path='/buy' element={<Buy />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/edit/:id' element={<EditForm />} />
            <Route path='/form' element={<Form />} />
            <Route path='/home' element={<Home />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/machine/:id' element={<Machine />} />
            <Route path='/sell' element={<Sell />} />
            <Route path='/service' element={<Service />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
