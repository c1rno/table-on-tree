import Layout from 'modules/Layout'
import Table from 'modules/Table'

// Use this function to register your modules and/or your datasources, or your
// event listeners. The Redux Store is not yet available at this point
export default async function(app, done, error) {
	console.log(`Application '${app.name}' is starting...`)

	app.register(Layout)
	app.register(Table)

	app.on('applicationDidStart', async function(app) {

	})

	done()
}
