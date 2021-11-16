import { createPlateComponents, Plate } from '@udecode/plate'

import { CONFIG } from './config/config'
import { plugins } from './config/plugins'

const components = createPlateComponents()

const App = () => (
  <Plate
  plugins={plugins}
  components={components}
  options={CONFIG.options}
  editableProps={CONFIG.editableProps}
  />
)

export default App
