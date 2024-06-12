import React from "react";
import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";
import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/app/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

async function FavoriteToggleButton({ propertyId }: { propertyId: string }) {
  const { userId } = auth();
  const favoriteId = await fetchFavoriteId({ propertyId });
  if (!userId) return <CardSignInButton />;
  return (
    <FavoriteToggleForm
      favoriteId={favoriteId}
      propertyId={propertyId}
    ></FavoriteToggleForm>
  );
}

export default FavoriteToggleButton;
