import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// import LangChainTrace from './LangChainTrace';

// function App() {
//   return (
//     <div className="App">
//       {/* YOUR ORIGINAL PROJECT COMPONENTS HERE */}
//       <MyExistingProject />

//       {/* THE NEW SEPARATE FEATURE */}
//       <hr style={{ margin: '50px 0', opacity: 0.2 }} />
//       <LangChainTrace />
//     </div>
//   );
// }