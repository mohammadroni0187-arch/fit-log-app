
"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { FitLogContext } from "@/context/FitLogProvider";

const Navber = () => {
  const context = useContext(FitLogContext);

if (!context) return null;

const { workPlan, saveWork } = context;

  return (



    <div className="navbar bg-black text-white shadow-sm px-4 p-6 md:px-8 border-b border-gray-600">

    
      <div className="navbar-start">

        
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-black rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li><Link href="/">Workout</Link></li>

            <li><Link href="/my-plan">My Plan</Link></li>
          </ul>
        </div>

        
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FitLog Logo"
            width={40}
            height={40}
          />

          <span className="font-bold text-xl tracking-wide">FITLOG</span>
        </Link>
      </div>


      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">

          <li><Link href="/" className="text-[#ccff00]">Workout</Link></li>

          <li><Link href="/my-plan">My Plan</Link></li>
          </ul>
      </div>


      
      <div className="navbar-end gap-2">

        
        <Link href="/my-plan">
          <div className="badge bg-black text-white border-none px-4 py-4 font-bold">
            Plan <span className="bg-[#ccff00] border rounded-xl text-black  ml-1">{workPlan.length}</span>
          </div>
        </Link>

        
        <Link href="/my-plan">
          <div className="badge bg-transparent text-white  border-none px-4 py-4 font-bold">
            Saved <span className="ml-1">{saveWork.length}</span>
          </div>
        </Link>

      </div>

    </div>
  );
};

export default Navber;