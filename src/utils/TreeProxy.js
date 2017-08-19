import update from 'immutability-helper'

class TreeProxy {
	constructor() {
		this.versions = []
		this.currentVersion = null
	}

	_checkVersion() {
		if (typeof(this.currentVersion) !== 'number') {
			if (!this.versions[0]) {
				return false
			}
			this.currentVersion = 0
			return true
		}
		return true
	}

	_changeVersion(inscrease = true) {
		if (this._checkVersion()) {
			const newVersion = inscrease ? this.currentVersion + 1 : this.currentVersion - 1
			if (!this.versions[newVersion]) {
				return false
			}
			this.currentVersion = newVersion
			return true
		}
		return false
	}

	/** Call it after adding smth to versions */
	inscreaseVersion() {
		return this._changeVersion(true)
	}

	decreaseVersion() {
		return this._changeVersion(false)
	}

	getTree() {
		return this.versions[this.currentVersion]
	}

	setTree(tree) {
		this.versions.push(tree)
		this.inscreaseVersion()
	}

	getTable(table) {
		let currentTree = this.getTree()
	}

	addRow(index) {

	}

	addCol(index) {

	}

}

export default new TreeProxy()
