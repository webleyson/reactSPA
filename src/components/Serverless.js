import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/aboutStyle.css'

const Serverless = () => {
  return (
    <CSSTransitionGroup
      transitionName="aboutTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={true}
      transitionLeave={true}>
       <section className="heroImage bg-dark">
        <header>
          <div className="col-sm-12  text-center">
            <h2 class="heroText WSorange">Serverless</h2>
            <h3 class="lead">Less management, instant scalability and low hosting costs.</h3>
          </div>
        </header>
      </section>

      <section className="mainFeatures">
      <div className="container">        
        <div className="row">

          <div className="col-xl-4 col-md-6 col-sm-12">
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
                <ul>
                    <li>Architecture design and alterations.
                    </li>
                    <li>Set up new systems and AWS services.
                    </li>
                    <li>DevOps software release management.
                    </li>
                    <li>Creation of Cloudformation scripts for any new software systems.
                    </li>
                    <li>Implementation of highly-resilient and scalable systems for your new
                        application.
                    </li>
                    <li>Implementation of performance and uptime monitoring for any new software
                        systems.
                    </li>
                    <li>
                        Security advice and review.
                    </li>
                    <li>AWS advice and technical support.
                    </li>
                </ul>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
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

export default Serverless
