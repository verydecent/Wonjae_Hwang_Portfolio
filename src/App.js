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
              <Card title="Wonjae Hwang" footer={<Link to="/">Back</Link>}>
                <div className="card-content-container">
                  <p className='paragraph'>Hi. I'm a JavaScript engineer in Los Angeles, California.
                  I create full stack applications with React and Node, keeping usability and maintainability in mind.
                  I'm always looking for new ways to write clean code.
                      I prefer simplicity over complexity.</p>
                </div>
              </Card>}
          />
          <Route
            path="/portfolio"
            render={() =>
              <Card title="My Work" footer={<Link to="/">Back</Link>}>
                <ul className="card-list">
                  <li className="card-list-item">
                    DarkPool - <a href='https://darkpool.netlify.com' target='_blank'>Live</a> / <a href='https://github.com/verydecent/dark-pool' target='_blank'>GitHub</a>
                    <div>
                      Graph based Scheduling To-Do Application
                    </div>
                  </li>
                  <li className="card-list-item">
                    Grailed Clone - <a href='https://grailedclone.netlify.com' target='_blank'>Live</a> / <a href='https://github.com/verydecent/grailed-clone/tree/master/grailed-clone' target='_blank'>GitHub</a>
                    <div>
                      Fashion E-Commerce Platform
                    </div>
                  </li>
                </ul>
              </Card>}
          />
          <Route
            path="/contact"
            render={() =>
              <Card title="Find Me" footer={<Link to="/">Back</Link>}>
                <div className="card-content-container">
                  <table>
                    <tr>
                      <th><a href=''>wonjae.dev@gmail.com</a></th>
                    </tr>
                    <tr>
                      <th><a targt='_blank' href='https://github.com/verydecent'>GitHub</a></th>
                    </tr>
                    <tr>
                      <th><a target='_blank' href='https://www.linkedin.com/in/wonjaehwang/'>LinkedIn</a></th>
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
