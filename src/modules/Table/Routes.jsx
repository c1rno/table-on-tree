import React from 'react'
import { Route } from 'react-router'

import Table from './components/Table'
import Hello from 'components/Hello'

export default function routes(store, children = null) {
	return <Route path="/example1" component={Table}>{children}</Route>
}
