import React from 'react'
import { Route } from 'react-router'

import Table from './components/Table'
import Table1 from './components/Table1'

export default function routes(store, children = null) {
	return (
		<div>
			<Route path="/example1" component={Table}>{children}</Route>
			<Route path="/example2" component={Table1}>{children}</Route>
		</div>
	)
}
