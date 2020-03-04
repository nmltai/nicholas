import React from 'react';
import './App.css';
import me from './me.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={me} alt="Nicholas Tai"/>
      <small>Nicholas Tai</small>
      <small>ntai@berkeley.edu</small>
      <a href="https://www.linkedin.com/in/nicholas-tai-698b20132/">LinkedIn</a>
      <a href="https://github.com/nmltai">GitHub</a>
      <a href="https://drive.google.com/file/d/1RWuqGWDeD8hzJ6UAqw2js_tiZcuC-oAX/view?usp=sharing">Resume</a>
      </header>
    </div>
  );
}

export default App;
