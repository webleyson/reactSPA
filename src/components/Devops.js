import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/devOpsStyle.css'

const Devops = () => {
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
            <h2 class="heroText WSorange">DevOps</h2>
            <h3 class="lead">Make Your Development Process, Fast, Efficient and Entirely Automated, From Start To Finish</h3>
          </div>
        </header>
      </section>

    <section className="pageFeatures">
      <div className="container">        
        <div className="row">
          <div className="col-sm-12"> 
              <h3 class="contentHeader WSorange">DevOps</h3>
         
              <p>
                Make Your Development Process, Fast, Efficient and Entirely Automated, From Start To Finish
                With our help you can set up modern, efficient and robust environments that can react to errors faster and with less strain on your employees. With your updates being rolled out faster and cleaner leading less strain on your developers who can in turn focus on innovation rather than maintenance.
                </p>
                <p>
                Utilising AWS Continuous Integration and Development services such as Codepipeline and Codebuild, we can streamline the deployment of your apps from source control to building, testing and deployment.
                </p>
          </div>
          <div class="col-sm-12 col-md-6">
            <h4 class="contentHeader WSorange">Source Integration</h4>
            <p>
            Host your source code on a variety of source control repositories such as AWS Codecommit or Gihub. Your source code can be managed and pulled from almost every industry standard source control implementation.
            </p>

            <h4 class="contentHeader WSorange">Building Code</h4>
            <p>
            AWS Codebuild allows your code to be automatically pulled from a repository and built using a variety of pre-set environments or your own docker containers. We can build environments to fit almost any use case, such as building multiple versions of your source to allow it to run on different servers, running different operating systems.
            </p>
          </div>
          <div class="col-sm-12 col-md-6">
            <h4 class="contentHeader WSorange">Testing Code</h4>
            <p>
            We can automatically check every change made to your source and perform simple unit tests or full scale integration tests upon every endpoint of your system. With our help you can help ensure that no bad code will take down your production environment.
            </p>

            <h4 class="contentHeader WSorange">
            Deploying Code
            </h4>
            <p>
            Automate and monitor every deployment to your servers or serverless environments. Minimise your downtime with features like in-place deployment or green-blue deployment and in the event of an an error, automated rollback will ensure that you always have a working instance to use.
            </p>
          
            </div>
          </div>
        </div>
      </section>
    </CSSTransitionGroup>
  )
}

export default Devops
