import React from 'react'
import { Component } from 'react'

// Importing the local component
import TableArea from 'components/TableArea'
import Button from 'components/Button'
import TreeProxy from 'utils/TreeProxy'
import makeTree from 'utils/TreeInterface'

class Table extends Component {
	constructor(props) {
		super(props)
		this.tree = TreeProxy
	}

	componentWillMount() {
		this.tree.setTree(makeTree().children[0], true)
		this.state = {
			rows: this.tree.getTable(),
			header: 'Simple example'
		}
	}

	handleClick(type, index) {
		return (event) => {
			console.log('Click on', type, index, 'handled', event)
			switch (type) {
				case 'ROW': this.tree.addRow(index); break
				case 'COL': this.tree.addCol(index); break
				default: console.log('ERROR: <Unknown type>')
			}
			this.setState({
				rows: this.tree.getTable()
			})
		}
	}

	inscreaseVersion(forward) {
		let versionChanger = forward ? this.tree.inscreaseVersion : this.tree.decreaseVersion
		versionChanger = versionChanger.bind(this.tree)
		return () => {
			const isChanged = versionChanger()
			if (isChanged) {
				this.setState({
					rows: this.tree.getTable()
				})
			}
		}
	}

	render() {
		return (
				<div className="table">
					<h2 className="table__header">{this.state.header}</h2>
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
