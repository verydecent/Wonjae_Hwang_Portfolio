import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';
import './App.css';

const contact = <ReactContactForm to="wnjhwng@gmail.com" className="email-form" />;


class App extends Component {
  render() {
    return (
      <div className="main">

        <div className="card-container">


          <div className="card">
            <h1 className="card-title">Wonjae Hwang</h1>
            <ul className="card-list">
              <li className="card-list-item"><a href="/">About</a></li>
              <li className="card-list-item"><a href="/">Portfolio</a></li>
              <li className="card-list-item"><a href="/">Contact</a></li>
            </ul>
            <div className="footer">
              EST. 2020
            </div>
          </div>


        </div>

      </div>
    );
  }
}

export default App;