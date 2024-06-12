import { formatQuantity } from "@/app/utils/format";
import React from "react";

type PropertyDetailsProps = {
  details: {
    bedrooms: number;
    baths: number;
    guests: number;
    beds: number;
  };
};

function PropertyDetails({ details }: PropertyDetailsProps) {
  const { bedrooms, baths, guests, beds } = details;
  return (
    <p className="text-md font-light">
      <span>{formatQuantity(guests, "guest")} &middot; </span>
      <span>{formatQuantity(beds, "bed")} &middot; </span>
      <span>{formatQuantity(bedrooms, "bedroom")} &middot; </span>
      <span>{formatQuantity(baths, "bath")}</span>
    </p>
  );
}

export default PropertyDetails;
