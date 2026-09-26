export interface IWorkout {
  id: number;
  name: string;
  image: string;
  description: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  sets: number;
  reps: number;
  duration: number;
  caloriesBurned: number;
  rating: number;
  instructions: string[];
}