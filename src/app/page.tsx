"use client"
import Advanced from "@/components/advanced/advanced";
import Basics from "@/components/basics/basics";
import Intermediate from "@/components/intermediate/intermediate";

export default function Home() {
  return (
    <>
      <h1>TypeScript Practice - Based on Rightpoint FED Assessment</h1>
      <Basics />
      <Intermediate />
      <Advanced />
    </>
  );
}
