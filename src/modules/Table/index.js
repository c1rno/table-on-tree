import Module from 'core/Module'

import Routes from './Routes'

const module = new Module('table', null, Routes)

module.submoduleOf('layout')

export default module
