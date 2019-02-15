import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/homeStyle.css'

import bgVideo from '../assets/walking.mp4';

const Home = () => {
  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div className="fullScreenPhoto">
          <header className="text-center">
          <h2>We're here to guide you</h2>
          <p className="lead">Making the decision to switch to the cloud can be daunting. We make it simple.</p>
          <button type="button" className="btn btn-primary btn-lg">Book a call</button>
          </header>


      </div>


<div className="video-container">
  <video autoplay poster="" className="video-parallax" loop muted>
     <source src={ bgVideo } type="video/mp4" />
    <source src="https://showbox-tr.dropbox.com/transcode_video/t/1qz2fy47wt9ay7i/header_background.mp4" type="video/mp4" />
  </video>
</div>

<div className="fullScreenPhoto2">
  <h3 className="text-center">More about What we do</h3>
    <div className="container">
        
      <div className="row">
      <div className="col-xl-4 col-md-4 col-sm-12">
        <div className="card">
          <div className="card-content">
            <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/05.jpg" alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title">Dev Ops Services</h4>
              <p className="card-text">We monitor, deploy and fix web-based applications using DevOps methodology.</p>
              <a href="#" className="btn btn-outline-pink">Find out more</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-md-4 col-sm-12">
        <div className="card">
          <div className="card-content">
            <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/05.jpg" alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title"> Serverless</h4>
              <p className="card-text">We make, build, deploy, monitor, manage serverless applications. These are applications that are pay-for-use and automatically scale up and down.</p>
              <a href="#" className="btn btn-outline-pink">Find out more</a>
            </div>
          </div>
        </div>
      </div>


      <div className="col-xl-4 col-md-4 col-sm-12">
        <div className="card">
          <div className="card-content">
            <img className="card-img-top img-fluid" src="../../../app-assets/images/carousel/05.jpg" alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title">AWS Consultancy</h4>
              <p className="card-text">Help customers migrate to on-site servers to the cloud (AWS).</p>
              <a href="#" className="btn btn-outline-pink">Find out more</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>  
</div>

<div className="fullScreenPhoto3"></div>
    </CSSTransitionGroup>
  )
}

export default Home




