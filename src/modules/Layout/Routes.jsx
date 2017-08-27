import React from 'react'
import { Route } from 'react-router'

import Layout from './components/Layout'

export default function routes(store, children = null) {
	return <Route path="/" component={Layout}>{children}</Route>
}
