import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Mỗi logical có 2 components, một
// cho sidebar và một cho trang chính.
// Chúng ta muốn  muốn xuất cả hai trong
// địa điểm khác nhau khi đường dẫn phù hợp
// URL hiện tại.

const routes = [
	{
		id: 0,
		path: "",
		exact: true,
		name: 'home',
		sidebar: () => <div>home!</div>,
		main: () => <h2>Home</h2>,
		children: [
			{
				idSub: 0,
				path: "/home1",
				name: 'home1',
				sidebar: () => <div>Home 1</div>,
				main: () => <div>Home 1</div>
			},
			{
				idSub: 1,
				path: "/home2",
				name: 'home2',
				sidebar: () => <div>Home 2</div>,
				main: () => <div>Home 2</div>
			}
		]
	},
	{
		id: 1,
		path: "/bubblegum",
		name: 'bubblegum',
		sidebar: () => <div>bubblegum</div>,
		main: () => <h2>Bubblegum</h2>
	},
	{
		id: 2,	
		path: "/shoelaces",
		name: 'shoelaces',
		sidebar: () => <div>shoelaces!</div>,
		main: () => <h2>Shoelaces</h2>,
		children: [
			{
				idSub: 0,
				path: "/shoelaces1",
				name: 'shoelaces1',
				sidebar: () => <div>shoelaces 1</div>,
				main: () => <div>shoelaces 1</div>
			},
			{
				idSub: 1,
				path: "/shoelaces2",
				name: 'shoelaces2',
				sidebar: () => <div>shoelaces 2</div>,
				main: () => <div>shoelaces 2</div>
			}
		]
	}
];

const SubMenu = ({subroute,match}) => {
	const renderSubItem = subroute
		? 
		subroute.map((sub)=>
			<li key={sub.idSub}>
				<Link to={match.url + sub.path}>{sub.name}</Link>
			</li>
		)
		:
		null
	return renderSubItem
}

const Menu = ({route,match}) => {
	const renderItem = (
		<li key={route.id}>
			<Link to={match.url + route.path}>{route.name}</Link>
			<ul>
				<SubMenu match={match} subroute={route.children?route.children:null} />
			</ul>
		</li>
	)
	return renderItem
}

const SidebarExample = ({match}) => {
	function renderItem(route){
		return(
			<Menu 
				route={route}
				match={match}
			/>
		)
	}
	return (
		<div>
			<Link to="/">Welcome</Link>
			<Router>
				<div style={{ display: "flex" }}>
					<div className="menu-item"
						style={{
				        padding: "10px",
				        width: "40%",
				        background: "#f0f0f0"}}
					>
						<ul
							style={{ listStyleType: "none", padding: 0 }}
						>
							{routes.map(renderItem)}
						</ul>
						
					</div>	
					<div className="page-item" style={{flex: 1,padding: "10px"}}>
						{routes.map((route,index)=>(
							route.children
							?
							<Route
								key={route.id}
								path={match.url + route.path}
								exact={route.exact}
								component={route.main}
							>
							{
								route.children.map((route,index)=>(
									<Route 
										key={route.idSub}
										path={match.url + route.path}
										children={route.main}
									/>
								))
							}
							</Route>
							:
							<Route
								key={route.id}
								path={match.url + route.path}
								exact={route.exact}
								component={route.main}
							/>
						))}
					</div>
				</div>
			</Router>
		</div>
		
	)
}

export default SidebarExample