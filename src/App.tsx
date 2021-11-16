import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import {
  createPlateComponents,
  ELEMENT_PARAGRAPH,
  HeadingToolbar,
  MentionCombobox,
  Plate,
} from '@udecode/plate'

import { MarkBallonToolbar, ToolbarButtons } from './config/components/Toolbars'
import { withStyledDraggables } from './config/components/withStyledDraggables'
import { withStyledPlaceHolders } from './config/components/withStyledPlaceHolders'
import { CONFIG } from './config/config'
import { MENTIONABLES } from './config/mentionables'
import { plugins } from './config/plugins'

const components = withStyledDraggables(
  withStyledPlaceHolders(createPlateComponents())
)

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <Plate
      plugins={plugins}
      components={components}
      options={CONFIG.options}
      editableProps={CONFIG.editableProps}
      initialValue={[{ type: ELEMENT_PARAGRAPH, children: [{ text: '' }] }]}
    >
      <HeadingToolbar>
        <ToolbarButtons />
      </HeadingToolbar>

      <MarkBallonToolbar />
      <MentionCombobox items={MENTIONABLES} />
    </Plate>
  </DndProvider>
)

export default App
