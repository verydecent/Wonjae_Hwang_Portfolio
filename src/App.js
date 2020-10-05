import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';
import { Route, Link } from 'react-router-dom';
import { Card } from './Components/Card';
import './App.css';

const contact = <ReactContactForm to="wnjhwng@gmail.com" className="email-form" />;


class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="card-container">
          <Route
            exact
            path="/"
            render={() =>
              <Card title="Wonjae Hwang" footer="EST. 2020">
                <ul className="card-list">
                  <li className="card-list-item"><Link to="/about">About</Link></li>
                  <li className="card-list-item"><Link to="/portfolio">Portfolio</Link></li>
                  <li className="card-list-item"><Link to="/contact">Contact</Link></li>
                </ul>
              </Card>}
          />
          <Route
            path="/about"
            render={() =>
              <Card title="About" footer={<Link to="/">Back</Link>}>
                <div className="card-content-container">
                  <table>
                    <tr>
                      <th>Wonjae Hwang</th>
                    </tr>
                    <tr>
                      <th>I enjoy creating full stack apps with React and Node./th>
                      <th>I'm always looking for new ways to write clean code</th>
                    </tr>
                  </table>
                </div>
              </Card>}
          />
          <Route
            path="/portfolio"
            render={() =>
              <Card title="Portfolio" footer={<Link to="/">Back</Link>}>
                <ul className="card-list">
                  <h1 style={{ textAlign: 'center', marginBottom: '8px', color: 'orange', fontWeight: 500, fontSize: '28px' }}>COMING SOON</h1>
                  <li className="card-list-item"><a href="/">Dating App / Github</a></li>
                  <li className="card-list-item"><a href="/">Crypto Trading Bot / Github</a></li>
                  <li className="card-list-item"><a href="/">Fashion Mood Board / Github</a></li>
                </ul>
              </Card>}
          />
          <Route
            path="/contact"
            render={() =>
              <Card title="Contact" footer={<Link to="/">Back</Link>}>
                <div className="card-content-container">
                  <table>
                    <tr>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <th>wonjae.dev@gmail.com</th>
                    </tr>
                  </table>
                </div>
              </Card>}
          />
        </div>
      </div >
    );
  }
}

export default App;
