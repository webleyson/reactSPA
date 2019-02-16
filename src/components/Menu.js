import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
  	<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
	    <div className="container">
	      	<a className="navbar-brand logo" href="#">Without <i class="fas fa-server"></i>ervers</a>
	      	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
	        	<span className="navbar-toggler-icon"></span>
	      	</button>
	      	<div className="collapse navbar-collapse" id="navbarResponsive">
	        	<ul className="navbar-nav ml-auto">
			        <li className="nav-item">
			          	<Link className="nav-link" to="/aws-consultancy">AWS</Link>
			        </li>
			        <li className="nav-item">
			            <Link className="nav-link" to="/serverless">Serverless</Link>
			        </li>
			        <li className="nav-item">
			            <Link className="nav-link" to="/dev-ops-services">Dev Ops</Link>
			        </li>
	        	</ul>
	      	</div>
	    </div>
  	</nav>
  )
}

export default Menu


