import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import Cart from './components/Cart';
import LandingPage from './components/LandingPage';
import Payment from './components/Payment';
import SearchBar from './components/SearchBar';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import VideoPlayer from './components/VideoPlayer';
import './index.css';

function App()
{
  return (
    <div className="container">
      <Router>
        <div>
          <div className='navbar'>
            <div className='logo'>MyElearning</div>
            <div className='nav-links'>
              <a href='/'>Home</a>
              <a href='/search'>Search</a>
              <a href='/addcourse'>Add Course</a>
              <a href='/payment'>Payment</a>
              <a href='/signin'>Sign In</a>
            </div>
          </div>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/addcourse" element={<AddCourse />} />
            <Route path="/search" element={<SearchBar />} />
            <Route path="/videoplayer" element={<VideoPlayer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
