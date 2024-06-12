"use client";

import { usePathname } from "next/navigation";
import React from "react";
import FormContainer from "../form/FormContainer";
import { CardSubmitButton } from "../form/Buttons";
import { toggleFavoriteAction } from "@/app/utils/actions";

function FavoriteToggleForm({
  favoriteId,
  propertyId,
}: {
  favoriteId: string | null | undefined;
  propertyId: string;
}) {
  const pathname = usePathname();

  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}

export default FavoriteToggleForm;
