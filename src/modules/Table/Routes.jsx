import React from 'react'
import { Route } from 'react-router'

import Table from './components/Table'
import Table1 from './components/Table1'
import Table2 from './components/Table2'

export default function routes(store, children = null) {
	return (
		<div>
			<Route path="/example" component={Table}>{children}</Route>
			<Route path="/example1" component={Table1}>{children}</Route>
			<Route path="/example2" component={Table2}>{children}</Route>
		</div>
	)
}
