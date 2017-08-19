import React from 'react'
import { Component } from 'react'

// Importing the local component
import TableArea from 'components/TableArea'
import TreeProvider from 'data/providers/Tree'

class Table extends Component {
	constructor(props) {
		super(props)
		this.handleClick.bind(this)
	}

	componentDidMount() {

	}

	componentDidUpdate(prevProps) {

	}

	componentWillUnmount() {

	}

	handleClick(type, index){
		return (event) => {
			console.log('Click on', type, index, 'handled', event)
		}
	}

	render() {
		let rows = [
			{ id: 1,
				cols: [
				{id: 11},
				{id: 12},
				{id: 13},
				{id: 14},
				{id: 15}
				] },
			{ id: 2,
				cols: [
				{id: 21},
				{id: 22},
				{id: 23},
				{id: 24},
				{id: 25}
				] },
			{ id: 3,
				cols: [
				{id: 31},
				{id: 32},
				{id: 33},
				{id: 34},
				{id: 35}
				] },
			{ id: 4,
				cols: [
				{id: 41},
				{id: 42},
				{id: 43},
				{id: 44},
				{id: 45}
				] },
			{ id: 5,
				cols: [
				{id: 51},
				{id: 52},
				{id: 53},
				{id: 54},
				{id: 55}
				] }
		]
		return (
				<div className="table">
					<h2 className="table__header">Simple example</h2>
					<TableArea rows={ rows } callback={ this.handleClick } />
					{ this.props.children }
				</div>
			)
	}
}

export default TreeProvider(Table)
