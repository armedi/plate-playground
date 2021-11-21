type FileContentListener = (content: string) => void

export class FileHandler {
  private fileSystemFileHandle?: FileSystemFileHandle
  private listeners: FileContentListener[] = []

  async openFile() {
    const [fileHandle] = await window
      .showOpenFilePicker({
        types: [{ accept: { 'application/json': ['.json'] } }],
      })

    this.fileSystemFileHandle = fileHandle
    await this.notifySubscribers()
  }

  async newFile(initialValue: string) {
    const fileHandle = await window
      .showSaveFilePicker({
        types: [{ accept: { 'application/json': ['.json'] } }],
      })

    this.fileSystemFileHandle = fileHandle
    await this.saveFile(initialValue)
    await this.notifySubscribers()
  }

  async saveFile(contents: string) {
    if (!this.fileSystemFileHandle) {
      throw new Error("Open an existing JSON file or create a new one first!")
    }

    const writable = await this.fileSystemFileHandle.createWritable();
    await writable.write(contents);
    await writable.close();
  }

  async readFile() {
    if (!this.fileSystemFileHandle) {
      throw new Error("Open an existing JSON file or create a new one first!")
    }

    const file = await this.fileSystemFileHandle.getFile();
    return file.text();
  }

  async subscribe(listener: FileContentListener) {
    this.listeners.push(listener)
  }

  private async notifySubscribers() {
    const content = await this.readFile()
    this.listeners.forEach(l => l(content))
  }
}

export const fileHandler = new FileHandler()