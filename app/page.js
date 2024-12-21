import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="select-none min-h-screen w-full dark:bg-gradient-to-b dark:from-black dark:to-gray-800 bg-gradient-to-b from-white to-gray-100 relative flex items-center justify-center px-4 sm:px-8 md:px-0 py-12 transition-all duration-500">
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient"></div>
      <div className="text-center z-20 space-y-10">
        <h1 className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 py-6">
          Tic Tac Toe
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* First Box */}
          <div className="relative z-20 bg-white dark:bg-gray-800 rounded-lg max-w-md mx-auto p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <p className="text-black dark:text-white font-semibold text-sm sm:text-base text-center leading-relaxed">
              Tic Tac Toe with a twist: after every third turn, the first X or O disappears. 
              Plan your moves wisely to outsmart your opponent!
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/infinite">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-gray-900 bg-white dark:text-neutral-300 text-black flex items-center py-2 px-6 rounded-md shadow-md hover:scale-105 transition-all duration-200"
                >
                  <span>Start Game ➡</span>
                </HoverBorderGradient>
              </Link>
            </div>
          </div>

          {/* Second Box */}
          <div className="relative z-20 bg-white dark:bg-gray-800 rounded-lg max-w-md mx-auto p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <p className="text-black dark:text-white font-semibold text-sm sm:text-base text-center leading-relaxed">
              Try a classic game of Tic Tac Toe with no twists—just pure strategy!
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/regular">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-gray-900 bg-white dark:text-neutral-300 text-black flex items-center py-2 px-6 rounded-md shadow-md hover:scale-105 transition-all duration-200"
                >
                  <span>Start Game ➡</span>
                </HoverBorderGradient>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
