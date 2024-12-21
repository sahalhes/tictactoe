"use client";
import React, { useCallback, useMemo, useState } from "react";
import { Block } from "./Block";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// Function to get opacity based on position and stack (not required for regular Tic Tac Toe)
const getOpacity = (position, stack) => 1;

export const TicTacToe = () => {
  const [state, setState] = useState(Array(9).fill(undefined));
  const [isXTurn, setIsXTurn] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Logic to check for a winner
  const checkWinner = useMemo(() => {
    return () => {
      const winnerLogic = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let logic of winnerLogic) {
        const [a, b, c] = logic;
        if (
          state[a] !== undefined &&
          state[a] === state[b] &&
          state[a] === state[c]
        ) {
          return { winner: state[a], combination: [a, b, c] };
        }
      }

      return null;
    };
  }, [state]);

  const winnerInfo = checkWinner();
  const isWinner = winnerInfo ? winnerInfo.winner : false;
  const winningCombination = winnerInfo && winnerInfo.combination ? winnerInfo.combination : [];

  // Check if it's a draw
  const isDraw = !isWinner && !state.includes(undefined);

  // Handle clicking on a block
  const handleClick = useCallback(
    (index) => {
      if (isWinner || state[index] !== undefined) return;

      setState((prevState) => {
        const newState = [...prevState];
        newState[index] = isXTurn ? "X" : "O";
        return newState;
      });

      setIsXTurn((prevTurn) => !prevTurn);
    },
    [isWinner, state, isXTurn]
  );

  // Reset the game
  const handleReset = useCallback(() => {
    setState(Array(9).fill(undefined));
    setIsXTurn(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start pt-10">
      {/* Display current turn or winner */}
      {!isWinner && !isDraw ? (
        <h4 className="select-none text-3xl mb-6 font-bold dark:text-neutral-400 text-black">
          Player {isXTurn ? "X" : "O"}'s turn
        </h4>
      ) : (
        <div className="select-none text-3xl mb-6 font-bold dark:text-neutral-400 text-black">
          {isWinner ? `${isWinner} won the game! 🎉` : "It's a draw! 🤝"}
        </div>
      )}

      {/* Game board */}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-1">
          {state.map((value, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {!isWinner && !isDraw && hoveredIndex === index && (
                  <motion.span
                    className="select-none absolute inset-0 h-full w-full dark:bg-slate-800/[0.8] bg-neutral-300 rounded-lg"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1.05,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Block
                onClick={() => handleClick(index)}
                value={value}
                opacity={getOpacity(index)}
                highlight={winningCombination.includes(index)}
              />
            </div>
          ))}
        </div>

        {/* Buttons in the same line */}
        <div className="mt-6 flex space-x-4">
          {/* Play Again or Restart Button */}
          {(isWinner || isDraw) ? (
            <button
              onClick={handleReset}
              className="select-none px-6 py-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#f9f9f9,45%,#e2e8f0,55%,#f9f9f9)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-black dark:text-white backdrop-blur-sm border border-black dark:border-white rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] dark:bg-black/[0.2] text-sm transition duration-200 w-[200px]"
            >
              Play again
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="select-none px-6 py-2 text-black dark:text-white backdrop-blur-sm border border-black dark:border-white rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] dark:bg-black/[0.2] text-sm transition duration-200 w-[200px]"
            >
              Restart
            </button>
          )}

          {/* Go to Homepage Button */}
          <Link href="/" passHref>
          <button
                            className="px-6 py-2 text-sm text-black dark:text-white rounded-md transition-colors duration-300 w-[200px] bg-gradient-to-r from-[#8df09e] to-[#60f77a] hover:scale-105 hover:bg-gradient-to-r hover:from-[#8df09e] hover:to-[#60f77a] dark:bg-gradient-to-r dark:from-[#43574e] dark:to-[#1a573b] dark:hover:bg-gradient-to-r dark:hover:from-[#43574e] dark:to-[#1a573b]"

            >
              Go to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
