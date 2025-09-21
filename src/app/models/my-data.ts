export interface ExtraInfo {
  notes: string;
}

export interface MyData extends ExtraInfo {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  category?: string; // optional
}
