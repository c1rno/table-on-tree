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

export default (dataset = 0) => {
	let initialData
	switch (dataset) {
		case 0:
			initialData = {id: -1, children: [
				{id: 10, children: [
					{id: 11, children: [
						{id: 12, children: [
							{id: 13, children: [
								{id: 14}
							]}
						]}
					]}
				]},
				{id: 20, children: [
					{id: 21, children: [
						{id: 22, children: [
							{id: 23, children: [
								{id: 24}
							]}
						]}
					]}
				]},
				{id: 30, children: [
					{id: 31, children: [
						{id: 32, children: [
							{id: 33, children: [
								{id: 34}
							]}
						]}
					]}
				]},
				{id: 40, children: [
					{id: 41, children: [
						{id: 42, children: [
							{id: 43, children: [
								{id: 44}
							]}
						]}
					]}
				]},
				{id: 50, children: [
					{id: 51, children: [
						{id: 52, children: [
							{id: 53, children: [
								{id: 54}
							]}
						]}
					]}
				]}
			]}
			break

		case 1:
			initialData = {id: -1, children: [
				{id: 10, children: [
					{id: 11, children: [
						{id: 12, children: [
							{id: 13, children: [
								{id: 14}
							]}
						]}
					]}
				]},
				{id: 20, children: [
					{id: 21, children: [
						{id: 22, children: [
							{id: 23, children: [
								{id: 24}
							]}
						]}
					]}
				]},
				{id: 30, children: [
					{id: 31, children: [
						{id: 32, children: [
							{id: 33, children: [
								{id: 34}
							]}
						]}
					]}
				]},
				{id: 40, children: [
					{id: 41, children: [
						{id: 42, children: [
							{id: 43, children: [
								{id: 44, children: [
									{id: 45}
								]}
							]}
						]}
					]}
				]},
				{id: 50, children: [
					{id: 51, children: [
						{id: 52, children: [
							{id: 53, children: [
								{id: 54}
							]}
						]}
					]}
				]},
				{id: 60, children: []}
			]}
			break
	}

	const currentTree = new TreeNode(null)
	currentTree.addChild(initialData)
	return currentTree
}
