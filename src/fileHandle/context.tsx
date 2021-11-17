import React, { PropsWithChildren, useContext, useState } from 'react';

import FilePicker from './FilePicker';

export const FileHandleContext =
  React.createContext<FileSystemFileHandle | null>(null)

export const useFileHandle = () => useContext(FileHandleContext)

type FileHandleProviderProps = PropsWithChildren<{}>

export const FileHandleProvider = ({ children }: FileHandleProviderProps) => {
  const [fileHandle, setFileHandle] = useState<FileSystemFileHandle | null>(
    null
  )

  return (
    <>
      <FileHandleContext.Provider value={fileHandle}>
        {children}
      </FileHandleContext.Provider>
      <FilePicker show={fileHandle === null} onFileSelected={setFileHandle} />
    </>
  )
}
