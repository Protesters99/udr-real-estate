import React from "react";
import MaxWidthContainer from "../shared/max-width-container";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_HOUSE } from "@/constants/data";

const fabHouseName = (houseName)=>{
  let link =  houseName.split(" ").join("-").toLowerCase()
  return link
}

export default function Listings() {
  return (
    <section>
      <MaxWidthContainer className="py-20 space-y-10">
        <h2 className="text-5xl">New Listings</h2>

        <div className="flex gap-16 justify-center md:flex-wrap">
          {FEATURED_HOUSE.map((house, index) => {
            return (
              <Card className="w-fit" key={index}>
                <CardContent className="text-2xl font-semibold space-y-6 ">
                  <div className="relative h-[300px] w-[450px]">
                    <Image
                      src={house.imgSrc}
                      alt="Duplex"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3>{house.title}</h3>
                  <p className="text-amber-700">{house.price}</p>

                  <CardFooter className="px-0">
                    <Link href={`/properties/${fabHouseName(house.title)}`}>
                      <Button className="bg-amber-700 hover:bg-teal-900 cursor-pointer">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </MaxWidthContainer>
    </section>
  );
}
