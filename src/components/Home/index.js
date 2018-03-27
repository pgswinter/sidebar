import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
	<div>
		<h2>Home</h2>
		<a href="/sandwiches">Sandwiches</a>
		<a href="/tacos">Tacos</a>
		<a href="/sidebar">Sidebar</a>
	</div>
)

export default Home