import React from 'react'
import { Link } from 'react-router'

const Menu = (props) => { return (
	<aside className={props.className + ' main-menu'}>
		<h3 className="main-menu__header">Menu</h3>
		<ul className="main-menu__list">
			<li className="main-menu__list_item">
				<Link to='/'>Home</Link>
			</li>
			<li className="main-menu__list_item">
				<Link to='/example1'>Simple example</Link>
			</li>
			<li className="main-menu__list_item">
				<Link to='/example2'>A bit more complicated example</Link>
			</li>
		</ul>
	</aside>
)}

export default Menu
