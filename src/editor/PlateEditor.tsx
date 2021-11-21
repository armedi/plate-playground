import { useContext, useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import {
  createPlateComponents,
  HeadingToolbar,
  MentionCombobox,
  Plate,
  plateStore
} from '@udecode/plate'

import { FileContentContext } from '../fileHandle'
import { MarkBallonToolbar, ToolbarButtons } from './components/Toolbars'
import { withStyledDraggables } from './components/withStyledDraggables'
import { withStyledPlaceHolders } from './components/withStyledPlaceHolders'
import { CONFIG } from './config/config'
import { CONSTANTS } from './config/constants'
import { DEFAULTS } from './config/defaults'
import { MENTIONABLES } from './config/mentionables'
import { plugins } from './config/plugins'

const components = withStyledDraggables(
  withStyledPlaceHolders(createPlateComponents())
)

export const PlateEditor = () => {
  const { savedValue } = useContext(FileContentContext)

  useEffect(() => {
    if (savedValue) {
      const editor = plateStore.getState()[CONSTANTS.PLATE_ID]?.editor
      if (editor) {
        editor.children = savedValue
        editor.onChange()
      }
    }
  }, [savedValue])

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate
        id={CONSTANTS.PLATE_ID}
        plugins={plugins}
        components={components}
        options={CONFIG.options}
        editableProps={CONFIG.editableProps}
        initialValue={savedValue || DEFAULTS.INITIAL_VALUE}
      >
        <HeadingToolbar>
          <ToolbarButtons />
        </HeadingToolbar>

        <MarkBallonToolbar />
        <MentionCombobox items={MENTIONABLES} />
      </Plate>
    </DndProvider>
  )
}
