import React from "react";
import TimelineDemo from "@/app/TimelineDemo"; // adjust path as needed
import WorldMap from "@/app/WorlMap";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <TimelineDemo />
      <WorldMap />
    </main>
  );
}
