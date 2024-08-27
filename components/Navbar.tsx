'use client'
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CirclePlus } from 'lucide-react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav className="w-full p-4 bg-gradient-to-r from-blue-100 via-gray-200 to-blue-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-between items-center w-full lg:w-auto">
              <div className="text-2xl font-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                JOB BASKET
              </div>
              <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            <div className={`${menuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row w-full lg:w-auto mt-4 lg:mt-0 lg:items-center`}>
              <div className="flex flex-col lg:flex-row text-sm gap-4 lg:gap-8 mb-4 lg:mb-0 lg:mr-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="hover:text-blue-600 cursor-pointer">Home</span>
                <span className="hover:text-blue-600 cursor-pointer">Find Jobs</span>
                <span className="hover:text-blue-600 cursor-pointer">Employers</span>
                <span className="hover:text-blue-600 cursor-pointer">Candidates</span>
                <span className="hover:text-blue-600 cursor-pointer">Blogs</span>
                <span className="hover:text-blue-600 cursor-pointer">Pages</span>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="border-2 p-2 rounded-lg bg-[#cdd7ea] w-full lg:w-auto text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <Link href="/Login">Login / Register</Link>
                </div>
                <div className="p-2 flex gap-2 rounded-lg text-white bg-blue-600 border-0 w-full lg:w-auto justify-center items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <CirclePlus color='#fff' />
                  <span>Post Job</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mt-2 lg:mt-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};