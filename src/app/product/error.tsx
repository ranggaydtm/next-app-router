"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex flex-col gap-2 items-center justify-center">
      <h2>Something went wrong</h2>
      <button
        className="px-4 py-1 rounded-sm bg-gray-300 cursor-pointer"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
