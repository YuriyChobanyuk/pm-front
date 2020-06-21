import { INote } from './../interfaces/note.interface';
import appClient from '../appClient';

class NoteService {
  async getNotes(): Promise<INote[]> {
    return appClient.get('/notes').then((res) => res.data);
  }

  async addNote(note: INote): Promise<INote> {
    return appClient.post('/notes', note).then((res) => res.data);
  }
}

export default new NoteService();
