import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';
import './App.css';

const custom = {
  color: 'white',
};

class App extends Component {
  render() {
    return (
      <div>
		    <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
		      <div className="container">
		        <a className="navbar-brand js-scroll-trigger" href="#page-top">Wonjae Hwang</a>
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="22e519c3-408c-4d1e-89a5-535ae59c3481"></div>
		        <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		          Menu
		          <i className="fas fa-bars"></i>
		        </button>
		        <div className="collapse navbar-collapse" id="navbarResponsive">
		          <ul className="navbar-nav ml-auto">
		            <li className="nav-item mx-0 mx-lg-1">
		              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
		            </li>
		            <li className="nav-item mx-0 mx-lg-1">
		              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
		            </li>
		            <li className="nav-item mx-0 mx-lg-1">
		              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
		            </li>
		          </ul>
		        </div>
		      </div>
		    </nav>

    
	    <header className="masthead bg-primary text-white text-center">
	      <div className="container">
	        <img className="img-fluid mb-5 d-block mx-auto" src="pf.png" alt="profile"/>
	        <h1 className="text-uppercase mb-0">Wonjae Hwang</h1>
	        <hr className="star-light"/>
	        <h2 className="font-weight-light mb-0">Front End Web Developer</h2><br />
          <h2 className="font-weight-light mb-0">Javascript - React - Node - HTML - CSS</h2>
	      </div>
        
        <div className="text-center mt-4">
          <a className="btn btn-xl btn-outline-light" href="img/portfolio/resume_wonjae_hwang.pdf" download>
            <i className="fas fa-download mr-2"></i>
            Download Resume
          </a>
        </div>
	    </header>

    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <hr className="star-dark mb-5"/>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/taco_run.png" alt=""/>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/dnd.png" alt=""/>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/spotty.png" alt=""/>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/interface.png" alt=""/>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/kitchen.png" alt=""/>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/mud.png" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="text-center text-uppercase text-white">About Me</h2>
        <hr className="star-light mb-5"/>
          <p className="lead maxwidth">
            Hello Everyone. I'm a web developer specializing in Front-End development. My goal is to be always learning and trying to make myself and those around me better! My two favorite technologies to work with are Node.js & React.js. I have 5+ years of customer service experience where I've had opportunities to develop my communication, organizational, and problem-solving skills across teams.
          </p>
      </div>
    </section>

      <section id="contact">
        <div className="container outline">
          <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
          <hr className="star-dark mb-5"/>
  	        <ReactContactForm to="wnjhwng@gmail.com" className="email-form" />
        </div>
      </section>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">California</p>
            </div>
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://github.com/verydecent">
                    <i className="fab fa-fw fa-github"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/wonjaehwang/">
                    <i className="fab fa-fw fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="text-uppercase mb-4">Reach Out</h4>
              <p className="lead mb-0">wnjhwng@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>

    <div className="copyright py-4 text-center text-white">
      <div className="container">
        <small>Copyright &copy; Wonjae Hwang 2019</small>
      </div>
    </div>

    <div className="scroll-to-top d-lg-none position-fixed ">
      <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>

    <div className="portfolio-modal mfp-hide" id="portfolio-modal-1">
      <div className="portfolio-modal-dialog bg-white">
        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
          <i className="fa fa-3x fa-times"></i>
        </a>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-secondary text-uppercase mb-0">Lets Get Tacos</h2>
              <hr className="star-dark mb-5"/>
              <iframe className="youtubeVid" src="https://www.youtube.com/embed/dVPt9IrXroA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="mb-5">Event organizer App that lets you interact with the Yelp Api and the Google Api to look up your favorite locations to get tacos at, invite friends, and schedule meet-ups. <a href="https://taco-run-c453f.firebaseapp.com/">Website</a>, <a href="https://github.com/Lambda-School-Labs/labs10-taco-run"> Github</a>, <a href="https://trello.com/b/CaLMkz0e/labs10-taco-run">Trello</a></p>
              <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                <i className="fa fa-close"></i>
                Close Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="portfolio-modal mfp-hide" id="portfolio-modal-2">
      <div className="portfolio-modal-dialog bg-white">
        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
          <i className="fa fa-3x fa-times"></i>
        </a>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-secondary text-uppercase mb-0">Encounter Generator</h2>
              <hr className="star-dark mb-5"/>
              <iframe className="youtubeVid" src="https://www.youtube.com/embed/qlZkw0JaVjM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="mb-5">5th edition dungeons and dragons Encounter Generator. This App will take was made with React. It takes input, filters, and generates the appropriate number of monsters given the party and difficulty. <a href="https://dungeon-helper.com/">Website</a>, <a href="https://github.com/lanners-marshall/dnd-encounter-generator"> Github</a>, <a href="https://trello.com/b/jaml8MNR/dndgenerator">Trello</a></p>
              <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                <i className="fa fa-close"></i>
                Close Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-modal mfp-hide" id="portfolio-modal-3">
      <div className="portfolio-modal-dialog bg-white">
        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
          <i className="fa fa-3x fa-times"></i>
        </a>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-secondary text-uppercase mb-0">Spotty</h2>
              <hr className="star-dark mb-5"/>
              <iframe className="youtubeVid" src="https://www.youtube.com/embed/m7SGsEVHVuQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="mb-5">This is a React App that interacts with the Spotify Api. It can be used to play music from your playlists, look up music and play it, build new tracks, and post those new tracks to your Spotify account. <a href="https://react-spotty.herokuapp.com/">Website</a>, <a href="https://github.com/lanners-marshall/spotty">Github</a></p>
              <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                <i className="fa fa-close"></i>
                Close Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-modal mfp-hide" id="portfolio-modal-4">
      <div className="portfolio-modal-dialog bg-white">
        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
          <i className="fa fa-3x fa-times"></i>
        </a>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-secondary text-uppercase mb-0">SJ-Architechts</h2>
              <hr className="star-dark mb-5"/>
              <iframe className="youtubeVid" src="https://www.youtube.com/embed/TGauJZ2WwL8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="mb-5">This is a responsive user interface project I made for a fictional architectural company.<a href="https://user-interface-project.firebaseapp.com"> Website</a>, <a href="https://github.com/lanners-marshall/User-Interface-Project-Week">Github</a>, <a href="https://trello.com/b/QMU9X0Uf/sj-architechts-marshall-lanners">Trello</a></p>
              <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                <i className="fa fa-close"></i>
                Close Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-modal mfp-hide" id="portfolio-modal-5">
      <div className="portfolio-modal-dialog bg-white">
        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
          <i className="fa fa-3x fa-times"></i>
        </a>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-secondary text-uppercase mb-0">Soup Kitchen</h2>
              <hr className="star-dark mb-5"/>
              <iframe className="youtubeVid" src="https://www.youtube.com/embed/sTfkubPO8GE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="mb-5">I served as a scrum master for a group of 7 other Lambda Students. My job was to serve as a generalist developer who would jump in where needed, help debug code, lead stand-ups, keep the group on task with the project, and provide everyone with the resources needed to complete their soup kitchen application and advance in the Lambda school program.<a href="https://adoring-leakey-35b5c6.netlify.com"> Website</a>, <a href="https://github.com/team-soup">Github</a>, <a href="https://trello.com/b/fZEwk4EM/teamsoup">Trello</a>, <a href="https://docs.google.com/document/d/1UyglcK2ss2EE6JRjJRFYWH2sNqMGsxF97K_VqCHzLBU"> Google Document</a></p>
              <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                <i className="fa fa-close"></i>
                Close Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-modal mfp-hide" id="portfolio-modal-6">
      <div className="portfolio-modal-dialog bg-white">
        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
          <i className="fa fa-3x fa-times"></i>
        </a>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-secondary text-uppercase mb-0">Multi User Dungeon</h2>
              <hr className="star-dark mb-5"/>
              <iframe className="youtubeVid" src="https://www.youtube.com/embed/vNqTUfXX6dg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="mb-5">I made a multi user dungeon in React and Django. It gives you the ability to interact with players in real time as you navigate your way through the dungeon.
              <a href="https://react-dungeon-89b7a.firebaseapp.com/mud"> Website</a>, <a href="https://github.com/lanners-marshall/LambdaMUD-Client">Github Client</a>, <a href="https://github.com/lanners-marshall/LambdaMUD-Project">Github Backend</a>, <a href="https://trello.com/b/yPJkKv9k/lambdamud-marshall-lanners">Trello</a></p>
              <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                <i className="fa fa-close"></i>
                Close Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
    );
  }
}

export default App;