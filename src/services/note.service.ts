import { INote, INoteContent } from './../interfaces/note.interface';
import appClient from '../appClient';

class NoteService {
  async getNotes(): Promise<INote[]> {
    return appClient.get('/notes').then((res) => res.data);
  }

  async addNote(note: INoteContent): Promise<INote> {
    return appClient.post('/notes', note).then((res) => res.data);
  }

  async updateNote(note: INote): Promise<void> {
    return appClient.patch('/notes', note).then((res) => res.data);
  }
}

export default new NoteService();
