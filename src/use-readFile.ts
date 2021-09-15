import { useEffect, useState } from 'react'
import { readFile } from './utils/read-file'

export const useReadFile = () => {
  const [file, setFile] = useState<File>()
  const [fileData, setFileData] = useState<string>()

  useEffect(() => {
    if (file) {
      readFile(file).then(data => {
        setFileData(data as string)
      })
    }
  }, [file])

  return { file: fileData, setFile }
}
