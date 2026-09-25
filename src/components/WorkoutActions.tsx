"use client";

import React, { useContext } from "react";

import { IWorkout } from "@/type/workout.type";
import { FitLogContext } from "@/context/FitLogProvider";
import { Bounce, toast } from "react-toastify";


interface WorkoutActionsProps {
  workout: IWorkout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const context = useContext(FitLogContext);

  if (!context) return null;

  const {
    workPlan,
    setWorkPlan,
    saveWork,
    setSaveWork,
  } = context;

  const handleAddToPlan = () => {
    if (workPlan.some((item) => item.id === workout.id)) {
    
      toast.error("This workout is already in your plan!", {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
      
      return;
    }

    if (workPlan.length >= 5) {
      toast.info("You can add maximum 5 workouts!", {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
      return;
    }

    setWorkPlan((previous) => [...previous, workout]);

toast.success("Workout added to today's plan!", {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  };

  const handleSaveForLater = () => {
    if (saveWork.some((item) => item.id === workout.id)) {
      toast.error("This workout is already saved!", {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
      return;
    }

    setSaveWork((previous) => [...previous, workout]);

    toast.success("Workout saved for later!", {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
    
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-8">

      <button
        onClick={handleAddToPlan}
        className="btn bg-[#ccff00] hover:bg-[#b8e600] text-black border-none flex-1 font-bold"
      >
        + Add to today's plan
      </button>

      <button
        onClick={handleSaveForLater}
        className="btn btn-outline flex-1"
      >
        ♡ Save for later
      </button>

    </div>
  );
};

export default WorkoutActions;