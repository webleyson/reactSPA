import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/awsStyle.css'
import helpingHand from '../assets/helpingHand.gif'
import diagram from '../assets/serverlessdiagram.png'

const Aws = () => {
  return (
    <CSSTransitionGroup
      transitionName="aboutTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <section className="heroImage bg-dark">
        <header>
          <div className="col-sm-12  text-center">
            <h2 class="heroText WSorange">AWS Consultancy</h2>
            <h3 class="lead">Here To Guide You</h3>
          </div>
        </header>
      </section>

      <section className="pageFeatures">
      <div className="container">        
        <div className="row">
          <div className="col-sm-12">
           <h3 class="contentHeader WSorange">A helping hand</h3>
           </div>
           <div className="col-md-6 col-sm-12">
           
              <p>
                      Migrating to AWS is easy, taking advantage of the AWS platform is difficult. We
                      have
                      the experience and knowledge to keep your applications in peak condition, giving
                      you
                      fast, reliable, secure and cost effective cloud solutions.
                  </p>
                  <p>
                      Our engineers are AWS certified professionals and are experienced in helping
                      large
                      companies safely migrate to the DevOps or NoOps solutions. We can make it easy
                      for
                      you to use AWS migration and management tasks such as:
                  </p>
          
                </div>
                <div className="col-md-6 col-sm-12">
                <img className="img-responsive img-thumbnail" src={helpingHand}/>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 col-sm-12">
                 <img className="img-responsive img-thumbnail" src={diagram}/>
            </div>
            
            <div className="col-md-6 col-sm-12">
            <h3 class="contentHeader WSorange">A heading</h3>
             <p>
                      Let us help your team take advantage of the vast library of AWS tools. Utilise
                      S3's
                      resilience, Cloudfront's performance, EC2's load balancing and RDS' redundancy
                      and
                      Batch processing to give you the power of using servers without all the hassle
                      that
                      comes with.
                  </p>
                  <p>
                      Bringing in one of our engineers to your software projects lets you take
                      advantage
                      of all the benefits of running your software in the cloud.
                  </p>
            </div>
          </div>
        </div>
      </section>
    </CSSTransitionGroup>
  )
}

export default Aws
