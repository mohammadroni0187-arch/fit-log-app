import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WorkoutCard = ({workout}:workoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="card bg-[#111111] border border-white/10 shadow-xl hover:border-[#ccff00]/50 transition-all duration-300">

        
        <figure className="h-100 overflow-hidden ">
          <Image
            src={workout.image}
            alt={workout.name}
            width={600}
            height={450}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body">

          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge bg-[#ccff00] text-black border-none font-semibold"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h2 className="card-title uppercase text-xl text-white">
            {workout.name}
          </h2>

          <p className="text-gray-400">
            {workout.equipment}
          </p>

          <div className="flex justify-between items-center mt-3 text-sm text-gray-300">

            <span>
              ⏱️ {workout.duration} min
            </span>

            <span>
              🔥 {workout.caloriesBurned} kcal
            </span>

            <span>
              ⭐ {workout.rating}
            </span>

          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;