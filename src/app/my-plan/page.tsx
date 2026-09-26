"use client";

import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";

import { FitLogContext } from "@/context/FitLogProvider";

type SortOption = "duration" | "calories" | "rating";

const MyPlanPage = () => {
  const context = useContext(FitLogContext);

  if (!context) return null;

  const {
    workPlan,
    saveWork,
    setWorkPlan,
    setSaveWork,
  } = context;

 

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  

  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

 

  const [doneWorkouts, setDoneWorkouts] =
    useState<number[]>([]);

  

  const totalMinutes = workPlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

 

  const totalCalories = workPlan.reduce(
    (total, workout) =>
      total + workout.caloriesBurned,
    0
  );

  

  const sortedWorkPlan = useMemo(() => {
    return [...workPlan].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  }, [workPlan, sortBy]);

  

  const sortedSaveWork = useMemo(() => {
    return [...saveWork].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  }, [saveWork, sortBy]);

  

  const handleRemoveFromPlan = (id: number) => {
    setWorkPlan((previous) =>
      previous.filter(
        (workout) => workout.id !== id
      )
    );

    
    setDoneWorkouts((previous) =>
      previous.filter((workoutId) => workoutId !== id)
    );

    toast.success("Workout removed from your plan!");
  };

  

  const handleMarkAsDone = (id: number) => {
   
    if (doneWorkouts.includes(id)) {
      return;
    }

    setDoneWorkouts((previous) => [
      ...previous,
      id,
    ]);

    toast.success("Workout marked as done!");
  };


  const handleRemoveFromSaved = (id: number) => {
    setSaveWork((previous) =>
      previous.filter(
        (workout) => workout.id !== id
      )
    );

    toast.success("Workout removed from saved!");
  };

  return (
    <main className="min-h-screen bg-[#090b11] py-10 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">

        <div className="mb-8">

          <h1 className="text-4xl md:text-5xl font-black uppercase text-white">
            MY PLAN
          </h1>

          <p className="text-white/60 mt-2">
            Keep track of your workouts and stay consistent.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#66749A] rounded-xl overflow-hidden mb-8">


          <div className="bg-[#3D4B72] p-6 border-b md:border-b-0 md:border-r border-[#66749A]">

            <p className="text-sm font-medium text-white/50">
              Exercises
            </p>

            <h2 className="text-4xl font-black text-[#ccff00] mt-2">
              {workPlan.length}
            </h2>

          </div>

          <div className="bg-[#3D4B72] p-6 border-b md:border-b-0 md:border-r border-[#66749A]">

            <p className="text-sm font-medium text-white/50">
              Minutes
            </p>

            <h2 className="text-4xl font-black text-white mt-2">
              {totalMinutes}
            </h2>

          </div>

          <div className="bg-[#3D4B72] p-6">

            <p className="text-sm font-medium text-white/50">
              Calories
            </p>

            <h2 className="text-4xl font-black text-white mt-2">
              {totalCalories}
            </h2>

          </div>

        </div>

        <div className="bg-black rounded-xl border border-[#66749A] overflow-hidden">

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border-b border-[#66749A]">

            <div className="flex bg-[#090b11] rounded-lg p-1">

              <button
                onClick={() => setActiveTab("plan")}
                className={`px-5 py-2 rounded-md text-sm font-bold transition ${
                  activeTab === "plan"
                    ? "bg-[#ccff00] text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Today's Plan
              </button>

              <button
                onClick={() => setActiveTab("saved")}
                className={`px-5 py-2 rounded-md text-sm font-bold transition ${
                  activeTab === "saved"
                    ? "bg-[#ccff00] text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Saved
              </button>

            </div>
            <div className="flex items-center gap-2">

              <span className="text-sm text-white/50">
                Sort by
              </span>

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as SortOption
                  )
                }
                className="select select-sm bg-[#3D4B72] text-white border-[#66749A] focus:outline-none"
              >
                <option value="duration">
                  Duration
                </option>

                <option value="calories">
                  Calories
                </option>

                <option value="rating">
                  Rating
                </option>
              </select>

            </div>

          </div>

          {activeTab === "plan" && (

            <div className="p-4 md:p-6">

              {workPlan.length === 0 ? (

                <div className="min-h-[280px] flex flex-col items-center justify-center text-center">

                  <h3 className="text-xl font-black text-white">
                    NOTHING HERE YET
                  </h3>

                  <p className="text-sm text-white/60 mt-2">
                    Browse the library and add a lift to get started.
                  </p>

                  <Link
                    href="/"
                    className="btn mt-5 bg-[#ccff00] hover:bg-[#b8e600] text-black border-none font-bold"
                  >
                    Go to workouts
                  </Link>

                </div>

              ) : (

                <div className="space-y-4">

                  {sortedWorkPlan.map((workout) => {

                    const isDone =
                      doneWorkouts.includes(
                        workout.id
                      );

                    return (

                      <div
                        key={workout.id}
                        className={`flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl border border-[#66749A] bg-[#46557F] transition ${
                          isDone
                            ? "opacity-70"
                            : ""
                        }`}
                      >

                        <div className="relative w-full md:w-28 h-40 md:h-24 rounded-lg overflow-hidden shrink-0">

                          <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            className="object-cover"
                          />

                        </div>

                        <div className="flex-1">

                          <h3
                            className={`text-lg font-black uppercase text-white ${
                              isDone
                                ? "line-through"
                                : ""
                            }`}
                          >
                            {workout.name}
                          </h3>

                          <p className="text-sm text-white/60 mt-1">
                            {workout.equipment}
                          </p>

                          <div className="flex flex-wrap gap-4 mt-3 text-xs text-white/70">

                            <span>
                              ⏱ {workout.duration} min
                            </span>

                            <span>
                              🔥 {workout.caloriesBurned} kcal
                            </span>

                            <span>
                              ⭐ {workout.rating}
                            </span>

                          </div>

                        </div>

                        <div className="flex flex-wrap gap-2">

                          <Link
                            href={`/workouts/${workout.id}`}
                            className="btn btn-sm bg-transparent border-[#66749A] text-white hover:bg-[#66749A]"
                          >
                            View Details
                          </Link>

                          <button
                            onClick={() =>
                              handleMarkAsDone(
                                workout.id
                              )
                            }
                            disabled={isDone}
                            className={`btn btn-sm border-none font-bold ${
                              isDone
                                ? "bg-green-500 text-white"
                                : "bg-[#ccff00] text-black hover:bg-[#b8e600]"
                            }`}
                          >
                            {isDone
                              ? "✓ Done"
                              : "Mark as Done"}
                          </button>


                          {/* REMOVE */}

                          <button
                            onClick={() =>
                              handleRemoveFromPlan(
                                workout.id
                              )
                            }
                            className="btn btn-sm btn-square bg-transparent border-[#66749A] text-white hover:bg-red-500 hover:border-red-500"
                          >
                            ✕
                          </button>

                        </div>

                      </div>

                    );
                  })}

                </div>

              )}

            </div>

          )}


          

          {activeTab === "saved" && (

            <div className="p-4 md:p-6">

              {saveWork.length === 0 ? (

                
                <div className="min-h-[280px] flex flex-col items-center justify-center text-center">

                  <h3 className="text-xl font-black text-white">
                    NOTHING SAVED YET
                  </h3>

                  <p className="text-sm text-white/60 mt-2">
                    Save workouts here and come back to them later.
                  </p>

                  <Link
                    href="/"
                    className="btn mt-5 bg-[#ccff00] hover:bg-[#b8e600] text-black border-none font-bold"
                  >
                    Browse workouts
                  </Link>

                </div>

              ) : (

               

                <div className="space-y-4">

                  {sortedSaveWork.map((workout) => (

                    <div
                      key={workout.id}
                      className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl border border-[#66749A] bg-[#232a3d]"
                    >

                     

                      <div className="relative w-full md:w-28 h-40 md:h-24 rounded-lg overflow-hidden shrink-0">

                        <Image
                          src={workout.image}
                          alt={workout.name}
                          fill
                          className="object-cover"
                        />

                      </div>


                      

                      <div className="flex-1">

                        <h3 className="text-lg font-black uppercase text-white">
                          {workout.name}
                        </h3>

                        <p className="text-sm text-white/60 mt-1">
                          {workout.equipment}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-3 text-xs text-white/70">

                          <span>
                            ⏱ {workout.duration} min
                          </span>

                          <span>
                            🔥 {workout.caloriesBurned} kcal
                          </span>

                          <span>
                            ⭐ {workout.rating}
                          </span>

                        </div>

                      </div>


                      

                      <div className="flex flex-wrap gap-2">

                        <Link
                          href={`/workouts/${workout.id}`}
                          className="btn btn-sm bg-transparent border-[#66749A] text-white hover:bg-[#66749A]"
                        >
                          View Details
                        </Link>

                        <button
                          onClick={() =>
                            handleRemoveFromSaved(
                              workout.id
                            )
                          }
                          className="btn btn-sm btn-square bg-transparent border-[#66749A] text-white hover:bg-red-500 hover:border-red-500"
                        >
                          ✕
                        </button>

                      </div>

                    </div>

                  ))}

                </div>

              )}

            </div>

          )}

        </div>

      </div>

    </main>
  );
};

export default MyPlanPage;