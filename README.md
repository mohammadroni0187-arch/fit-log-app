# FitLog

FitLog is a modern workout management web application built with Next.js, TypeScript, Tailwind CSS, and DaisyUI. It allows users to explore workouts, view workout details, add exercises to their daily plan, save workouts for later, and track completed exercises.


## GitHub Repository

[(https://github.com/mohammadroni0187-arch/fit-log-app)]

## Features

* Browse a collection of workouts
* View detailed information about each workout
* Add workouts to today's plan
* Maximum of 5 workouts can be added to a daily plan
* Save workouts for later
* Remove workouts from the plan or saved list
* Mark workouts as completed
* Track total exercises, duration, and calories
* Sort workouts by duration, calories, and rating
* Responsive design for mobile, tablet, and desktop
* Toast notifications for user actions
* Custom 404 page for invalid routes
* Loading animation while workout data is loading

## Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Toastify
* REST API

## Main Pages

### Home

The home page contains:

* Navigation bar
* Hero section
* Workout library
* Workout cards
* Responsive layout

### Workout Details

Users can view:

* Workout image
* Workout name
* Description
* Muscle groups
* Equipment
* Difficulty
* Sets and reps
* Duration
* Calories
* Rating
* Workout instructions

Users can also add a workout to their plan or save it for later.

### My Plan

The My Plan page allows users to:

* View today's workout plan
* View saved workouts
* See total exercises
* See total duration
* See total calories
* Sort workouts
* Mark workouts as completed
* Remove workouts

## API

This project uses the FitLog workout API to fetch workout data.

API Endpoint:

`https://api.api-store.workers.dev/api/fitlog`

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd fit-log-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## Project Structure

```text
src/
├── app/
│   ├── my-plan/
│   ├── workouts/
│   ├── not-found.tsx
│   ├── loading.tsx
│   ├── page.tsx
│   └── layout.tsx
│
├── components/
│   ├── Banner.tsx
│   ├── Footer.tsx
│   ├── Navber.tsx
│   ├── WorkoutCard.tsx
│   ├── WorkoutActions.tsx
│   └── Workouts.tsx
│
├── context/
│   └── FitLogProvider.tsx
│
└── type/
    └── workout.type.ts
```

## Responsive Design

FitLog is designed to work across different screen sizes:

* Mobile
* Tablet
* Laptop
* Desktop

## Author

**Md. Roni**

Frontend Developer | React.js | Next.js | TypeScript

GitHub: [(https://github.com/mohammadroni0187-arch)]

LinkedIn: [(https://www.linkedin.com/in/md-roni-2034733a2/)]
