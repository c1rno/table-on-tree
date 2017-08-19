import Module from 'core/Module'

import Reducer from './Reducer'

const datasource = new Module(
	'tree', Reducer
)

export default datasource
