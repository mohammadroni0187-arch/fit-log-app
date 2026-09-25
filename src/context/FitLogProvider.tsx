"use client"

import { IWorkout } from '@/type/workout.type';
import React, { createContext, ReactNode, useState } from 'react';

interface IFitLogContext {
   workPlan: IWorkout[];
  setWorkPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saveWork: IWorkout[];
  setSaveWork: React.Dispatch<React.SetStateAction<IWorkout[]>>;}

   export const FitLogContext = createContext<IFitLogContext | null>(null);

const FitLogProvider = ({children}:{children :ReactNode}) => {

  const [workPlan, setWorkPlan]= useState <IWorkout[]> ([]);
  const [saveWork, setSaveWork]=useState <IWorkout[]> ([]);

  const sharePlanData={
    workPlan,
    setWorkPlan,
    saveWork,
    setSaveWork

  }

  

  return (<FitLogContext.Provider value={sharePlanData}>
    {children}
  </FitLogContext.Provider>);
};

export default FitLogProvider;