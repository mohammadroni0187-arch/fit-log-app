import React from 'react';
import WorkoutCard from './WorkoutCard';
import { IWorkout } from '@/type/workout.type';

const getWorkouts = async()=>{
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
  const data = await res.json()
  return data
}

const Workouts =async () => {
const workoutData =await getWorkouts();
console.log(workoutData, 'workout')
  return (
    <section id="library" className="px-6 py-16 bg-black">

      
      <div className="mb-10 pt-15">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          THE LIBRARY
        </h2>

        <p className="text-gray-400 mt-2">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {workoutData.map((workout:IWorkout, ind:number) => (
          <WorkoutCard key={ind} workout={workout}/>
        ))}

      </div>

    </section>
  );
};

export default Workouts;