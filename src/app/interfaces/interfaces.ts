export interface ITracker {
  id: number;
  habitId: number;
  date: string; // need to change to Data type later
  completionStatus: boolean;
}

export interface IHabit {
  id: number;
  habit: string;
  userId: number;
}
