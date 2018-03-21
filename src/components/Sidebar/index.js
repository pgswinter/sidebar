import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Mỗi logical có 2 components, một
// cho sidebar và một cho trang chính.
// Chúng ta muốn  muốn xuất cả hai trong
// địa điểm khác nhau khi đường dẫn phù hợp
// URL hiện tại.

const routes = [
	{
		path: "",
		exact: true,
		sidebar: () => <div>home!</div>,
		main: () => <h2>Home</h2>
	},
	{
		path: "/bubblegum",
		sidebar: () => <div>bubblegum</div>,
		main: () => <h2>Bubblegum</h2>
	},
	{
		path: "/shoelaces",
		sidebar: () => <div>shoelaces!</div>,
		main: () => <h2>Shoelaces</h2>
	}
];

const SidebarExample = ({match}) => (
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
						<li>
							<Link to={match.url}>Home</Link>
						</li>
						<li>
							<Link to={match.url + '/bubblegum'}>Bubblegum</Link>
						</li>
						<li>
							<Link to={match.url + '/shoelaces'}>Shoelaces</Link>
						</li>
					</ul>
					{routes.map((route,index) => (
						// Bạn có thể render một Route trong nhiều places
						// như bạn muốn trong ứng dụng. Nó sẽ render cùng với (along with)
						// những <Route> khác để match URL.
						// Nên, một sidebar hoặc breadcrumbs hoặc bất cứ thứ
						// gì khác yêu cầu bạn render nhiều thứ trong nhiều
						// places tại cùng URL thì không có gì nhiều hơn các <Route>
						<Route 
							key={index}
							path={match.url + route.path}
							exact={route.exact}
							component={route.sidebar}
						/>
					))}
				</div>	
				<div className="page-item" style={{flex: 1,padding: "10px"}}>
					{routes.map((route,index)=>(
						<Route 
							key={index}
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

export default SidebarExample