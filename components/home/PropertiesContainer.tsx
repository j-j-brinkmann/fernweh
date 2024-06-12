import { fetchProperties } from "@/app/utils/actions";
import { PropertyCardProps } from "@/app/utils/types";
import React from "react";
import EmptyList from "./EmptyList";
import PropertiesList from "./PropertiesList";

async function PropertiesContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const properties: PropertyCardProps[] = await fetchProperties({
    search,
    category,
  });

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No results"
        message="Try changing or removing some filters"
        btnText="Clear filters"
      />
    );
  }

  return <PropertiesList properties={properties} />;
}

export default PropertiesContainer;
