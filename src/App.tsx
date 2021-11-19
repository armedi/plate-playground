import Guide from './components/Guide';
import { PlateEditor } from './editor/PlateEditor';
import { FileContentProvider, FilePicker } from './fileHandle';

const App = () => {
  return (
    <FileContentProvider>
      <PlateEditor />
      <FilePicker />
      <Guide />
    </FileContentProvider>
  )
}

export default App
