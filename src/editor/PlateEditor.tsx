import { useContext } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import {
  createPlateComponents,
  HeadingToolbar,
  MentionCombobox,
  Plate
} from '@udecode/plate';

import { FileContentContext } from '../fileHandle';
import { MarkBallonToolbar, ToolbarButtons } from './components/Toolbars';
import { withStyledDraggables } from './components/withStyledDraggables';
import { withStyledPlaceHolders } from './components/withStyledPlaceHolders';
import { CONFIG } from './config/config';
import { CONSTANTS } from './config/constants';
import { DEFAULTS } from './config/defaults';
import { MENTIONABLES } from './config/mentionables';
import { plugins } from './config/plugins';

const components = withStyledDraggables(
  withStyledPlaceHolders(createPlateComponents())
)

export const PlateEditor = () => {
  const { savedValue } = useContext(FileContentContext)

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate
        id={CONSTANTS.PLATE_ID}
        plugins={plugins}
        components={components}
        options={CONFIG.options}
        editableProps={CONFIG.editableProps}
        initialValue={savedValue || DEFAULTS.INITIAL_VALUE}
        key={Math.random().toString()}
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
