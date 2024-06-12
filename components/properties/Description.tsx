"use client";
import React, { useState } from "react";
import Title from "./Title";
import { Button } from "../ui/button";

function Description({ description }: { description: string }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const words = description.split(" ");
  const isLongDescription = words.length > 100;

  const toggleDescriptionHandler = () => {
    setShowFullDescription(!showFullDescription);
  };

  const displayedDescription =
    isLongDescription && !showFullDescription
      ? words.splice(0, 100).join(" ") + "..."
      : description;

  return (
    <article className="mt-4 ">
      <Title text="Description" />
      <p className="text-muted-foreground font-light leading-loose">
        {displayedDescription}
      </p>
      {isLongDescription && (
        <Button
          variant="link"
          className="pl-0"
          onClick={toggleDescriptionHandler}
        >
          {showFullDescription ? "Show less" : "Show more"}
        </Button>
      )}
    </article>
  );
}

export default Description;
