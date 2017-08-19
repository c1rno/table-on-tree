import reduceWith from 'core/ReduceWith'
import DefaultState from './DefaultState'
import { ADD_ROW, ADD_COL } from './Actions'


const mutators = {
	[ADD_ROW]: (state, action) => {
		console.log(state, action)
		return {...state, tree: state.tree}
	},
	[ADD_COL]: (state, action) => {
		console.log(state, action)
		return {...state, tree: state.tree}
	}
}

export default reduceWith(mutators, DefaultState)
