import isHotkey from 'is-hotkey';
import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { AnyObject, plateStore, TNode } from '@udecode/plate';

import { CONSTANTS } from '../editor/config/constants';
import { parseSlateJSON } from '../editor/utils/validateJsonStructure';
import { fileHandler, FileHandler } from './FileHandler';

const stub = () => {
  throw new Error(
    'You forgot to wrap your component with <FileContentProvider>'
  )
}

export const FileContentContext = React.createContext<{
  fileHandler: FileHandler
  error: string
  hasInitiated: boolean
  savedValue?: TNode<AnyObject>[]
  onSave(value: TNode<AnyObject>[]): void
}>({
  fileHandler,
  error: '',
  hasInitiated: false,
  savedValue: undefined,
  onSave: stub,
})

export const useFileHandle = () => useContext(FileContentContext)

type FileContentProviderProps = PropsWithChildren<{}>

export const FileContentProvider = ({ children }: FileContentProviderProps) => {
  const [fileContent, setFileContent] = useState('')
  const [hasInitiated, setHasInitiated] = useState(false)

  const contextValue = useMemo(
    () => {
      let savedValue = undefined
      let error = ''
      try {
        savedValue = parseSlateJSON(fileContent)
      } catch (err: any) {
        error = err.message
      }

      return {
        fileHandler,
        error: hasInitiated ? error : '',
        hasInitiated: hasInitiated,
        savedValue,
        onSave() { },
      }
    },
    [hasInitiated, fileContent]
  )

  const onKeyDown = (event: KeyboardEvent) => {
    if (isHotkey('mod+o', event)) {
      event.preventDefault()
      fileHandler.openFile().catch(() => { })
    }

    if (isHotkey('mod+s', event)) {
      event.preventDefault()
      const content = plateStore.getState()[CONSTANTS.PLATE_ID].value
      fileHandler.saveFile(JSON.stringify(content, null, 2))
    }
  }

  useEffect(() => {
    fileHandler.subscribe((content) => {
      setFileContent(content)
      setHasInitiated(true)
    })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <FileContentContext.Provider value={contextValue}>
      {children}
    </FileContentContext.Provider>
  )
}
