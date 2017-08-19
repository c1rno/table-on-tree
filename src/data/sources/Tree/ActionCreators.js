import { ADD_ROW, ADD_COL } from './Actions'

export function addRow(index) {
	return {
		type: ADD_ROW,
		index: index
	}
}

export function addCol(index) {
	return {
		type: ADD_COL,
		index: index
	}
}
