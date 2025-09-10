"use client";
import MaxWidthContainer from "@/components/shared/max-width-container";
import React from "react";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import Button from "@/components/ui/my-button";

export default function Page() {
  const [person, setPerson] = useState("");
  const lastNameRef = useRef();

  function displayName(){
    alert(`My last name is ${lastNameRef.current.value}`)
  }

  return (
    <div>
      <div className="bg-amber-900 md:py-32">
        <MaxWidthContainer>
          <h1 className="text-6xl text-white font-bold">Properties</h1>
        </MaxWidthContainer>
      </div>

      <MaxWidthContainer className="py-10">
        {/* Controlled Components */}
        <Input
          className="w-1/3 border-amber-600"
          placeholder="Enter your First Name here"
          value={person}
          onChange={(event) => setPerson(event.target.value)}
        />
        <p>My name is {person}</p>

        

        {/* Uncontrolled Component */}
        <Input
          className="w-1/3 border-amber-600"
          placeholder="Enter your Last Name here"
          ref={lastNameRef}
        />
        <p>My last name is </p>

        {/* <Button text={"Submit"}/> */}
        <button onClick={displayName}>Submit</button>
      </MaxWidthContainer>
    </div>
  );
}
