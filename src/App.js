import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import Cart from './components/Cart';
import LandingPage from './components/LandingPage';
import Payment from './components/Payment';
import SearchBar from './components/SearchBar';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import VideoPlayer from './components/VideoPlayer';
function App()
{
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signout">Sign Out</Link></li>
            <li><Link to="/addcourse">Add Course</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/videoplayer">Video Player</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/payment">Payment</Link></li>
          </ul>
        </nav>

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
  );
}

export default App;
