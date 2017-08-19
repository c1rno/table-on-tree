import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import * as ActionCreators from 'data/sources/Tree/ActionCreators'

const treeSelector = state => state.tree
const select = createStructuredSelector({
	tree: treeSelector
})

export default connect(select, ActionCreators)
