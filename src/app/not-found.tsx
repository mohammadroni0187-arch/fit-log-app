
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-[#090b11] px-4">
      <div className="text-center">

        <h1 className="text-7xl font-black text-[#ccff00]">
          404
        </h1>

        <h2 className="text-2xl font-bold text-white mt-4">
          Page Not Found
        </h2>

        <p className="text-white/60 mt-2">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="btn mt-6 bg-[#ccff00] text-black border-none font-bold"
        >
          Back to Workouts
        </Link>

      </div>
    </main>
  );
};

export default NotFound;