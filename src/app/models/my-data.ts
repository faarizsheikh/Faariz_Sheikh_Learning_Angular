export interface ExtraInfo {
  notes?: string;
}

export interface MyData extends ExtraInfo {
  id: number;
  title: string;
  developer: string;
  genre: string;
  yearReleased: number;
  platform: string;
  price: number;
  isCompleted: boolean;
  imageUrl: string;
}
