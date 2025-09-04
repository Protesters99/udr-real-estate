import React from "react";
import MaxWidthContainer from "../shared/max-width-container";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { FEATURED_HOUSE } from "@/constants/data";

export default function Listings() {
  return (
    <section>
      <MaxWidthContainer className="py-20 space-y-10">
        <h2 className="text-5xl">New Listings</h2>

        <div className="flex gap-8">
            {FEATURED_HOUSE.map((house, index) => {
                return(
                <Card className="w-fit" key={index}>
                    <CardContent className="w-full text-2xl font-semibold space-y-6">
                    <Image
                        src={`/${house.imgSrc}`}
                        alt="Duplex"
                        width={400}
                        height={500}
                    />

                    <h3>{house.title}</h3>
                    <p className="text-amber-700">{house.price}</p>
                    </CardContent>
                </Card>
                )
            })}
        </div>
      </MaxWidthContainer>
    </section>
  );
}
