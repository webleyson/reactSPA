import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () =>{
	return (
		<ul>
			<li><Link to="/">Home</li>
			<li><Link to="/works">Works</li>
			<li><Link to="about">About</li>
		</ul>
	)
}

export default Menu

