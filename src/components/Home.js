import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/homeStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  MapContainer from './Maps'
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
  <video autoPlay poster="" className="video-parallax" loop muted>
    <source src={ bgVideo } type="video/mp4" />
    
  </video>
</div>

<section className="mainFeatures">
  <h3 className="text-center">More about What we do</h3>
    <div className="container">
        
      <div className="row">
      <div className="col-xl-4 col-md-4 col-sm-12">
        <div className="card">
          <div className="card-content">
          <div className="card-header devOpsBg">
            <h4 className="card-title">Dev Ops Services</h4>
          </div>
           <span className="fa-center">

           <i className="fab fa-dev fa-3x img-thumbnail"></i>
           </span>
            <div className="card-body">
              
              <p className="card-text">We monitor, deploy and fix web-based applications using DevOps methodology.</p>
              <a href="#" className="btn btn-outline-pink">Find out more</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-md-4 col-sm-12">
        <div className="card">
          <div className="card-content">
          <div className="card-header serverBg">
            <h4 className="card-title">Serverless</h4>
          </div>
        

           <span className="fa-center">
            <span className="fa-stack fa-2x" >
              <i className="fas fa-server fa-stack-1x img-thumbnail"></i>
              <i className="fas fa-ban fa-stack-2x "></i>
            </span>
            </span>

            <div className="card-body">
             
              <p className="card-text">We make, build, deploy, monitor, manage serverless applications. These are applications that are pay-for-use and automatically scale up and down.</p>
              <a href="#" className="btn btn-outline-pink">Find out more</a>
            </div>
          </div>
        </div>
      </div>


      <div className="col-xl-4 col-md-4 col-sm-12">
        <div className="card">
          <div className="card-content">
          <div className="card-header orangeBg">
            <h4 className="card-title">AWS Consultancy</h4>
          </div>
          <span className="fa-center">
            <i className="fab fa-aws fa-3x img-thumbnail"></i>
          </span>
         
            <div className="card-body">
              <p className="card-text">Help customers migrate to on-site servers to the cloud (AWS).</p>
              <a href="#" className="btn btn-outline-pink">Find out more</a>
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
        <form>
              <div>
                  <label htmlFor="inputName">Name</label>
                  <br/>
                  <input type="name" className="form-control" id="inputName"
                         aria-describedby="inputName" placeholder="Enter Name"/>
              </div>
              <div>
                  <label htmlFor="inputCompany">Company</label>
                  <br/>
                  <input type="name" className="form-control" id="inputCompany"
                         aria-describedby="inputCompany" placeholder="Enter Company Name"/>
              </div>
              <div>
                  <label htmlFor="inputEmail">Email address</label>
                  <br/>
                  <input type="email" className="form-control" id="inputEmail"
                         aria-describedby="emailHelp" placeholder="Enter email"/>
                  <br/>
                  <small id="emailHelp" className="form-text text-muted">We'll never send you
                      unsolicited emails.
                  </small>
              </div>
              <div>
                  <label htmlFor="inputPhone">Phone Number</label>
                  <br/>
                  <input type="telephone" className="form-control" id="inputPhone"
                         placeholder="Phone Number"/>
              </div>
              <div>
                  <label htmlFor="inputMessage">Message</label>
                  <br/>
                  <textarea rows="3" type="message" className="form-control" id="inputMessage"
                            placeholder="How can we help?"/>
              </div>
              <div>Thank
                  you for contacting us. We will be in touch as soon as we can.
              </div>
              <div>We are
                  sorry, your message could not be delivered.
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
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




