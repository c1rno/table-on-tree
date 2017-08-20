class TreeNode {
	constructor(parent, data = null) {
		this.parent = parent
		this.data = data
		this.children = []
		this.addChild.bind(this)
	}
	addChild(data) {
		const recursiveAdder = (parent, data) => {
			const child_id = parent.children.push(new TreeNode(parent, data)) - 1
			if (Array.isArray(data.children)) {
				for (let sub_child of data.children) {
					recursiveAdder(parent.children[child_id], sub_child)
				}
			}
		}
		recursiveAdder(this, data)
	}
}

export default () => {
	const initialData = [
		{ id: 1, children: [ {id: 11}, {id: 12}, {id: 13}, {id: 14}, {id: 15} ] },
		{ id: 2, children: [ {id: 21}, {id: 22}, {id: 23}, {id: 24}, {id: 25} ] },
		{ id: 3, children: [ {id: 31}, {id: 32}, {id: 33}, {id: 34}, {id: 35} ] },
		{ id: 4, children: [ {id: 41}, {id: 42}, {id: 43}, {id: 44}, {id: 45} ] },
		{ id: 5, children: [ {id: 51}, {id: 52}, {id: 53}, {id: 54}, {id: 55} ] }
	]
	const root = new TreeNode(null)
	for (let node of initialData) {
		root.addChild(node)
	}
	return root
}
