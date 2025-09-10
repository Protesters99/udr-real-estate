"use client";
import React from "react";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        className="py-4 px-6 border bg-amber-200 cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
      <p>Clicked {count} time(s)</p>
    </div>
  );
}
