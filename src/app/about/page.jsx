"use client";
import MaxWidthContainer from "@/components/shared/max-width-container";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React, { use } from "react";
import { useState, useEffect } from "react";

export default function Page() {
  const [countries, setCountries] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(
        "https://restcountries.com/v3.1/region/africa"
      );
      const data = await response.json();
      setCountries(data);
    }

    fetchCountries();
  }, []);

  return (
    <MaxWidthContainer>
      <button
        className="py-4 px-6 border bg-amber-200 cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
      <p>Clicked {count} time(s)</p>

      <div className="grid grid-cols-3 gap-20">
        {countries &&
          countries.map((country, index) => {
            return(
              <Card key={index}>
                <CardContent>
                  <div className="relative w-[400px] h-[250px]">
                    <Image
                      src={country.flags.png}
                      alt="Country"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h1 className="text-3xl font-bold mt-6 text-center">{country.name.common}</h1>
                </CardContent>
              </Card>
            )
          })}
      </div>
    </MaxWidthContainer>
  );
}
