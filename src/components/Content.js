import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Aws from './Aws'
import Serverless from './Serverless'
import Devops from './Devops'
const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/aws-consultancy" component={Aws} />
      <Route path="/devop-services" component={Devops} />
      <Route path="/serverless" component={Serverless} />
    </Switch>
  )
}

export default Content
