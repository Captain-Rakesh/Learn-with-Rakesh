
export interface ClassItem {
  id: number;
  title: string;
  description: string;
  chapters: string[];
  icon: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export type ViewState = {
  type: 'home';
} | {
  type: 'lesson';
  classId: number;
  chapterName: string;
};
