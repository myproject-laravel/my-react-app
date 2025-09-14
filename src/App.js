import './App.css';  // Add this at the top of App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

const Home = () => (
  <div className="page-content">
    <h2>Welcome to my Website</h2>
    <p>This is the home page where you can find all the latest information about our projects and services.</p>
    <div className="feature-cards">
      <div className="card">Project Portfolio</div>
      <div className="card">Our Services</div>
      <div className="card">Client Testimonials</div>
    </div>
  </div>
);

const About = () => (
  <div className="page-content">
    <h2>About Us</h2>
    <p>We are a creative team dedicated to building amazing web experiences for our clients.</p>
    <p>Our team consists of experienced developers, designers, and project managers who work together to deliver exceptional results.</p>
  </div>
);

const Contact = () => (
  <div className="page-content">
    <h2>Contact Us</h2>
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Your message"></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
);

const NewProject = () => (
  <div className="page-content">
    <h2>Start a New Project</h2>
    <div className="project-form">
      <div className="form-group">
        <label htmlFor="project-name">Project Name</label>
        <input type="text" id="project-name" placeholder="Project name" />
      </div>
      <div className="form-group">
        <label htmlFor="project-type">Project Type</label>
        <select id="project-type">
          <option value="">Select a type</option>
          <option value="web">Web Application</option>
          <option value="mobile">Mobile App</option>
          <option value="design">UI/UX Design</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="project-desc">Project Description</label>
        <textarea id="project-desc" placeholder="Describe your project"></textarea>
      </div>
      <button type="submit">Create Project</button>
    </div>
  </div>
);

const Company = () => (
  <div className="page-content">
    <h2>Our Company</h2>
    <p>We are a leading provider of innovative solutions in the tech industry.</p>
    <div className="company-info">
      <h3>Our Mission</h3>
      <p>To deliver exceptional value to our clients through cutting-edge technology and creative problem-solving.</p>
      
      <h3>Our Team</h3>
      <p>Our team consists of experienced professionals with diverse backgrounds in technology, design, and business.</p>
      
      <h3>Our Values</h3>
      <ul>
        <li>Innovation and Creativity</li>
        <li>Client Satisfaction</li>
        <li>Integrity and Transparency</li>
        <li>Continuous Improvement</li>
      </ul>
    </div>
  </div>
);

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="nav-brand">MyApp</div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/company" className={location.pathname === '/company' ? 'active' : ''}>Company</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        <Link to="/newproject" className={location.pathname === '/newproject' ? 'active' : ''}>New Project</Link>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 MyCostApp.Created by GaioK.</p>
    <div className="footer-links">
      <a href="/privacy">Private Policy</a>
      <a href="/terms">Terms of Service</a>
      <a href="/contact">Contact Us</a>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newproject" element={<NewProject />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;