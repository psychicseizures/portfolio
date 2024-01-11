import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer.js';
import ProjectPage from './components/ProjectPage';
import ContactPage from './components/Contact.js';
import ResumePage from './components/Resume'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Switch>
          <Route path="/resume" component={ResumePage}/>
          <Route path="/project" component={ProjectPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" exact>
            <MainContent />
          </Route>
          {/* Add more routes if needed */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
