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
	const initialData = {id: -1, children: [
		{id: 1, children: [
			{id: 11, children: [
				{id: 111, children: [
					{id: 1111, children: [
						{id: 11111}
					]}
				]}
			]}
		]},
		{id: 2, children: [
			{id: 22, children: [
				{id: 222, children: [
					{id: 2222, children: [
						{id: 22222}
					]}
				]}
			]}
		]},
		{id: 3, children: [
			{id: 33, children: [
				{id: 333, children: [
					{id: 3333, children: [
						{id: 33333}
					]}
				]}
			]}
		]},
		{id: 4, children: [
			{id: 44, children: [
				{id: 444, children: [
					{id: 4444, children: [
						{id: 44444}
					]}
				]}
			]}
		]},
		{id: 5, children: [
			{id: 55, children: [
				{id: 555, children: [
					{id: 5555, children: [
						{id: 55555}
					]}
				]}
			]}
		]}
	]}
	const currentTree = new TreeNode(null)
	currentTree.addChild(initialData)
	return currentTree
}
