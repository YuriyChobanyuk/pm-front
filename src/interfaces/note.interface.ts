export enum NoteTag {
  URGENT = 'urgent',
  WORK = 'work',
  INFO = 'information',
}

export interface INote {
  title: string;
  text: string;
  tags: NoteTag[];
  creationDate: Date;
}
