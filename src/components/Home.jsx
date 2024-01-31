import React from 'react';
import { Link } from 'react-router-dom';
import './alm.css'

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Online School</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/courses" className="nav-link">
                All Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/students" className="nav-link">
                Student List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h2>Welcome to Your Online School!</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!
        </p>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h4>Connect with Us</h4>
          <ul className="social-links">
            <li className="social-link">
              <a href="https://twitter.com/suryap_999_1" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li className="social-link">
              <a href="https://medium.com/@developerstoday99" target="_blank" rel="noopener noreferrer">
                Medium
              </a>
            </li>
            <li className="social-link">
              <a href="https://www.linkedin.com/in/spm999/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
