"use client";

import { FitLogContext } from "@/context/FitLogProvider";
import React, { useContext } from "react";

const MyPlanPage = () => {
  const context = useContext(FitLogContext);

  if (!context) return null;

  const { workPlan, saveWork } = context;

  const totalMinutes = workPlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = workPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-base-200 py-10 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-black uppercase">
            MY PLAN
          </h1>

          <p className="text-base-content/60 mt-2">
            Track your workouts and stay consistent.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

          <div className="bg-base-100 border border-base-300 rounded-xl p-6">
            <p className="text-sm font-bold text-base-content/50">
              EXERCISES
            </p>

            <h2 className="text-4xl font-black mt-2">
              {workPlan.length}
            </h2>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-xl p-6">
            <p className="text-sm font-bold text-base-content/50">
              MINUTES
            </p>

            <h2 className="text-4xl font-black mt-2">
              {totalMinutes}
            </h2>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-xl p-6">
            <p className="text-sm font-bold text-base-content/50">
              CALORIES
            </p>

            <h2 className="text-4xl font-black mt-2">
              {totalCalories}
            </h2>
          </div>

        </div>

        {/* Tabs */}
        <div className="tabs tabs-lift">

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Today's Plan"
            defaultChecked
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            Today's Plan
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Saved"
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            Saved
          </div>

        </div>

      </div>

    </main>
  );
};

export default MyPlanPage;