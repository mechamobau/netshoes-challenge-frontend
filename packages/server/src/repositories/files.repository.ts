import { resolve } from 'path';
import { readFile } from 'fs';

interface IFileRepository {
  get: <T extends any>() => Promise<T>;
}

class FileRepository implements IFileRepository {
  fileName: string;
  path: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.path = resolve(__dirname, `../data/${this.fileName}.json`);
  }

  get<T>() {
    return new Promise<T>((resolve, reject) => {
      readFile(this.path, (error, data) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(JSON.parse(data.toString()) ?? []);
      });
    });
  }
}

export default FileRepository;
