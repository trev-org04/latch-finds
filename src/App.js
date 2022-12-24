import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './home/home';
import Error from './404/404';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="*" element={<Error />} />
            {/* <Route exact path='/gallery' element={<Gallery />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} /> */}
        </Routes>
    </Router>
);
}

export default App;
