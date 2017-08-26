import React from 'react'
import { Component } from 'react'

// Importing the local component
import TableArea from 'components/TableArea'
import Button from 'components/Button'
import TreeProvider from 'data/providers/Tree'
import TreeProxy from 'utils/TreeProxy'

class Table extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.state = {
			rows: TreeProxy.getTable()
		}
	}

	handleClick(type, index) {
		return (event) => {
			console.log('Click on', type, index, 'handled', event)
			switch (type) {
				case 'ROW': TreeProxy.addRow(index); break
				case 'COL': TreeProxy.addCol(index); break
				default: console.log('ERROR: <Unknown type>')
			}
			this.setState({
				rows: TreeProxy.getTable()
			})
		}
	}

	inscreaseVersion(forward) {
		let versionChanger = forward ? TreeProxy.inscreaseVersion : TreeProxy.decreaseVersion
		versionChanger = versionChanger.bind(TreeProxy)
		return () => {
			const isChanged = versionChanger()
			if (isChanged) {
				this.setState({
					rows: TreeProxy.getTable()
				})
			}
		}
	}

	render() {
		return (
				<div className="table">
					<h2 className="table__header">Simple example</h2>
					<div className="table__controls">
						<Button name="Turn back changes" callback={this.inscreaseVersion(false).bind(this)} />
						<Button name="Forward changes" callback={this.inscreaseVersion(true).bind(this)} />
					</div>
					<TableArea rows={ this.state.rows } callback={ this.handleClick.bind(this) } />
					{ this.props.children }
				</div>
			)
	}
}

export default Table
