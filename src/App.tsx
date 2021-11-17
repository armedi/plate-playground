import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import {
  createPlateComponents,
  ELEMENT_PARAGRAPH,
  HeadingToolbar,
  MentionCombobox,
  Plate
} from '@udecode/plate';

import {
  MarkBallonToolbar,
  ToolbarButtons
} from './components/Toolbars';
import { withStyledDraggables } from './components/withStyledDraggables';
import {
  withStyledPlaceHolders
} from './components/withStyledPlaceHolders';
import { CONFIG } from './config/config';
import { MENTIONABLES } from './config/mentionables';
import { plugins } from './config/plugins';
import { FileHandleProvider } from './fileHandle/context';

const components = withStyledDraggables(
  withStyledPlaceHolders(createPlateComponents())
)

const App = () => (
  <FileHandleProvider>
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
  </FileHandleProvider>
)

export default App
