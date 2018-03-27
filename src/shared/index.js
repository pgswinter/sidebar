import React from 'react'

import Home from '../components/Home/';
import Sandwiches from '../components/Page/sandwiches'
import Bus from '../components/Page/bus'
import Car from '../components/Page/car'
import Tacos from '../components/Page/tacos'

const MappingLink = [
	{
		path: "/",
		id: 1,
		name: "home",
		component: Home,
		exact: true
	},
	{
		path: "/sandwiches",
		id: 2,
		name: "sandwiches",
		component: Sandwiches
	},
	{
		path: "/tacos",
		id: 3,
		name: "tacos",
		component: Tacos,
		children: [
			{
				path: "/car",
				id: 1,
				name: "Car",
				component: Car
			},
			{
				path: "/bus",
				id: 2,
				name: "Bus",
				component: Bus
			}
		]
	}
]

export default MappingLink