import { PlateEditor } from './editor/PlateEditor';
import { FileContentProvider, FilePicker } from './fileHandle';

const App = () => {
  return (
    <FileContentProvider>
      <PlateEditor />
      <FilePicker />
    </FileContentProvider>
  )
}

export default App
