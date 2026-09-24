
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content  px-4 border-t border-gray-700 md:px-8 py-4">
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 gap-4">

        
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={40}
            height={40}
          />

          <span className="font-bold text-xl tracking-wide">
            FITLOG
          </span>
        </Link>

      
        <p className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
