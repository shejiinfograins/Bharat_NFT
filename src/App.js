import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import Home from './components/Home'
import Create from './components/Create'
import CreatePost from './components/CreatePost'
import Contact from './components/Contact'
import Term from './components/Term'
import About from './components/About'
import Privacy from './components/Privacy'
import Profile from './components/Profile'
import Prod_detail from './components/Prod_detail.jsx'
import Edit_profile from './components/Edit-profile.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/term" element={<Term />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/prod_detail" element={<Prod_detail />} />
            <Route path="/edit_profile" element={<Edit_profile />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

// basename='/bharat_nft/'