
import WorkoutActions from "@/components/WorkoutActions";
import { IWorkout } from "@/type/workout.type";
import Image from "next/image";
import React from "react";

interface IWorkoutDetailsPage {
  params: Promise<{
    id: string;
  }>;
}

const getWorkouts = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await res.json();
  return data;
};

const WorkoutsDetails = async ({
  params,
}: IWorkoutDetailsPage) => {
  const { id } = await params;

  const workoutsData = await getWorkouts();

  const workout = workoutsData.find(
    (workout: IWorkout) =>
      String(workout.id) === String(id)
  );

  if (!workout) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          Workout not found
        </h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base-200 py-10 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">
        <div className="card lg:card-side overflow-hidden bg-base-100 shadow-xl border border-base-300">

          <figure className="lg:w-1/2 relative min-h-[350px] lg:min-h-[650px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute top-5 left-5">
              <span className="badge bg-[#ccff00] text-black border-none font-bold px-4 py-4">
                {workout.difficulty}
              </span>
            </div>
          </figure>

          <div className="card-body lg:w-1/2 p-6 md:p-10">


            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mt-3 leading-tight">
              {workout.name}
            </h1>

            <p className="text-base-content/70 leading-7 mt-2">
              {workout.description}
            </p>
            <div className="flex flex-wrap  gap-2 ">
              {workout.muscleGroups.map(
                (muscle: string) => (
                  <span
                    key={muscle}
                    className="bg-[#ccff00] badge badge-outline font-semibold"
                  >
                    {muscle}
                  </span>
                )
              )}
            </div>

            <div className="mt-6"> 
              <h3 className="text-sm font-bold tracking-widest text-base-content/60 mb-3"> KEY SPECS </h3>
               <div className="border border-base-300 rounded-xl overflow-hidden"> 
                 <div className="flex items-center justify-between px-5 py-4 border-b border-base-300"> 
                  <span className="text-xs font-bold text-base-content/50"> EQUIPMENT </span>
                   <span className="font-semibold text-sm text-right"> {workout.equipment} </span> 
                   </div> 
                   <div className="flex items-center justify-between px-5 py-4 border-b border-base-300"> 
                    <span className="text-xs font-bold text-base-content/50"> DIFFICULTY </span>
                     <span className="font-semibold text-sm text-right"> {workout.difficulty} </span>
                      </div> 
                      <div className="flex items-center justify-between px-5 py-4 border-b border-base-300"> 
                        <span className="text-xs font-bold text-base-content/50"> SETS </span> 
                        <span className="font-semibold text-sm"> {workout.sets} </span> 
                        </div> 
                         <div className="flex items-center justify-between px-5 py-4 border-b border-base-300"> 
                          <span className="text-xs font-bold text-base-content/50"> REPS </span> 
                          <span className="font-semibold text-sm"> {workout.reps} </span>
                           </div> 
                           <div className="flex items-center justify-between px-5 py-4 border-b border-base-300">
                             <span className="text-xs font-bold text-base-content/50"> DURATION </span> 
                             <span className="font-semibold text-sm"> {workout.duration} min </span>
                              </div> 
                               <div className="flex items-center justify-between px-5 py-4">
                                 <span className="text-xs font-bold text-base-content/50"> CALORIES </span>
                                  <span className="font-semibold text-sm"> {workout.caloriesBurned} kcal </span> 
                                  </div>
                                   </div>
                                    </div>


            <div className="flex items-center gap-2 mt-5">
              <span className="text-yellow-500 text-xl">
                ★
              </span>

              <span className="font-bold text-lg">
                {workout.rating}
              </span>

              <span className="text-base-content/50">
                / 5.0
              </span>
            </div>


            <div className="mt-6">

              <h3 className="text-sm font-bold tracking-widest text-base-content/60 mb-3">
                INSTRUCTIONS
              </h3>

              <ol className="space-y-3">
                {workout.instructions.map(
                  (instruction: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-3"
                    >
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ccff00] text-black flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 pt-0.5">
                        {instruction}
                      </p>
                    </li>
                  )
                )}
              </ol>

            </div>

                <WorkoutActions workout={workout}/>

          </div>
        </div>

      </div>

    </main>
  );
};

export default WorkoutsDetails;
