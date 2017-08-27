import React from 'react'
import { Component } from 'react'

// Importing the local component
import Header from '../Header'
import Footer from '../Footer'
import Menu from '../Menu'
import Info from '../Info'

// Importing some CSS
import 'bootstrap/dist/css/bootstrap.css'

class Layout extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const body = this.props.children || <Info />
		return (
				<div>
					<Header/>
					<div className='container-fluid'>
						<div className='row'>
							<Menu className='col-md-2 col-sm-12' />
							<main className='col-md-10 col-sm-12'>
								{ body }
							</main>
						</div>
					</div>
					<Footer/>
				</div>
			)
	}
}

export default Layout
