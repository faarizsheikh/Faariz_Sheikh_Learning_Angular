export interface ExtraInfo {
  notes?: string;
  sequentialNumbering?: number;
  experience?: number;
}

export interface MyData extends ExtraInfo {
  id: number;
  title: string;
  developer: string;
  genre: string;
  yearReleased: number;
  platform: string;
  age: number;
  price: number;
  isCompleted: boolean;
  rating: number;
  imageUrl: string;
}
