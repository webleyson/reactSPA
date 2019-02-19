import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/homeStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  MapContainer from './Maps'
import bgVideo from '../assets/walking.mp4';
import Example from './Modal'
import ContactForm from './ContactForm'
import { Link } from 'react-router-dom'
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
          <Example />
          </header>


      </div>


          <div className="video-container">
            <video autoPlay poster="" className="video-parallax" loop muted>
              <source src={ bgVideo } type="video/mp4" />
              
            </video>
          </div>

          <section className="mainFeatures">
              <div className="container">
                  
                <div className="row">

                <div className="col-xl-4 col-md-4 col-sm-12">
                  <div className="card text-center">
                      <div className="card-content">
                       <header class="card-image">
                        <span className="fa-center">
                          <i className="fab fa-aws fa-3x WSorange"></i>
                        </span>
                      </header>

                   
                    <div className="card-header orangeBg">
                      <h4 className="card-title WSorange">AWS Consultancy</h4>
                    </div>
                   
                      <div className="card-body">
                        <p className="card-text">Help customers migrate to on-site servers to the cloud (AWS).</p>
                      </div>

                      <div className="card-footer">
                      <Link className="nav-link" to="/aws-consultancy"><button type="button" class="btn btn-outline-WSorange">See more</button></Link>
                      </div>
                    </div>
                  </div>
                </div>

              

                <div className="col-xl-4 col-md-4 col-sm-12">
                  <div className="card text-center">
                    <header class="card-image">
                      <span className="fa-center">
                        <span className="fa-stack fa-2x" >
                          <i className="fas fa-server fa-stack-1x text-danger"></i>
                          <i className="fas fa-ban fa-stack-2x text-danger"></i>
                        </span>
                      </span>
                    </header>
                    <div className="card-content">
                      <div className="card-header serverBg">
                        <h4 className="card-title text-danger">Serverless</h4>
                      </div>
                  
                      <div className="card-body">
                        <p className="card-text">We make, build, deploy, monitor, manage serverless applications. These are applications that are pay-for-use and automatically scale up and down.</p>
                      </div>
                      <div className="card-footer">
                        <Link className="nav-link" to="/serverless"><button type="button" class="btn btn-outline-danger">See more</button></Link>
                      </div>
                    </div>
                  </div>
                </div>

                  
                <div className="col-xl-4 col-md-4 col-sm-12">
                  <div className="card text-center">
                    <header class="card-image">
                      <span className="fa-center">
                        <i className="text-primary fab fa-dev fa-3x"></i>
                      </span>
                    </header>
                    <div className="card-content">
                    <div className="card-header devOpsBg">
                      <h4 className="card-title text-primary">Dev Ops Services</h4>
                    </div>
                    
                      <div className="card-body">
                        <p className="card-text">We monitor, deploy and fix web-based applications using DevOps methodology.</p>
                      </div>
                      <div className="card-footer">
                          <Link className="nav-link" to="/devop-services"><button type="button" class="btn btn-outline-primary">See more</button></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </section>



          <section className="contactSection">
            <div className="container">
             <div className="row">
                <div className="col-sm-6">
                <div id="userMessage"></div>
                 <ContactForm />
                </div>
                <div class="col-sm-6">
                    <MapContainer />
                </div>
              </div>
            </div>
          </section>
    </CSSTransitionGroup>
  )
}

export default Home







