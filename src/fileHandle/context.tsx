import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { AnyObject, TNode } from '@udecode/plate'

import { fileHandler, FileHandler } from './FileHandler'

const stub = () => {
  throw new Error(
    'You forgot to wrap your component with <FileContentProvider>'
  )
}

export const FileContentContext = React.createContext<{
  fileHandler: FileHandler
  savedValue?: TNode<AnyObject>[]
  onSave(value: TNode<AnyObject>[]): void
}>({
  fileHandler,
  savedValue: undefined,
  onSave: stub,
})

export const useFileHandle = () => useContext(FileContentContext)

type FileContentProviderProps = PropsWithChildren<{}>

export const FileContentProvider = ({ children }: FileContentProviderProps) => {
  const [fileContent, setFileContent] = useState('')

  const contextValue = useMemo(
    () => ({
      fileHandler: fileHandler,
      savedValue: fileContent ? JSON.parse(fileContent) : undefined,
      onSave() {},
    }),
    [fileContent]
  )

  useEffect(() => {
    fileHandler.subscribe(setFileContent)
  }, [])

  return (
    <FileContentContext.Provider value={contextValue}>
      {children}
    </FileContentContext.Provider>
  )
}
