export enum NoteTag {
  URGENT = 'urgent',
  WORK = 'work',
  INFO = 'information',
}

export interface INoteContent {
  title: string;
  text: string;
  tags: string[];
}

export interface INote {
  id: string;
  title: string;
  text: string;
  tags: string[];
  creationDate: Date;
  active: boolean;
}
