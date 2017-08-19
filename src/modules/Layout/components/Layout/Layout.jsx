import React from 'react'
import { Component } from 'react'

// Importing the local component
import Header from '../Header'
import Footer from '../Footer'
import Menu from '../Menu'

// Importing some CSS
import 'bootstrap/dist/css/bootstrap.css'

class Layout extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	componentDidUpdate(prevProps) {

	}

	componentWillUnmount() {

	}

	render() {
		return (
				<div>
					<Header/>
					<div className='container-fluid'>
						<div className='row'>
							<Menu className='col-md-2 col-sm-12' />
							<main className='col-md-10 col-sm-12'>
								{ this.props.children }
							</main>
						</div>
					</div>
					<Footer/>
				</div>
			)
	}
}

export default Layout
