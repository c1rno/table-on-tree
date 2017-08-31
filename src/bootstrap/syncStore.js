import { browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

export default async function (store) {
	return new Promise( (resolve) => {
		setTimeout( () => {
			resolve(syncHistoryWithStore(hashHistory, store))
		}, 2000)
	})
}
