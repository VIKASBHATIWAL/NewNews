import './App.css';

import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';




function App()  {
  const apiKey= process.env.REACT_APP_NEWS_API

const [progress, setProgress] = useState(0)

 

  
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <Routes>

          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={6} country='us' category='general' />}></Route>
          <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey}  key='business' pageSize={6} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey}  key='entertainment' pageSize={6} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey}  key='health' pageSize={6} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey}  key='science' pageSize={6} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey}  key='sports' pageSize={6} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey}  key='technology' pageSize={6} country='us' category='technology' />}></Route>

          </Routes>
        </Router>
      </div>
    )  
  
}

export default App;
