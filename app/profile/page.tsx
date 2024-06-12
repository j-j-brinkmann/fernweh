import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import React from "react";
import {
  fetchProfile,
  updateProfile,
  updateProfileImageAction,
} from "../utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import ImageInputContainer from "@/components/form/ImageInputContainer";

async function ProfilePage() {
  const userProfile = await fetchProfile();
  console.log(userProfile);

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Your Profile</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <ImageInputContainer
          image={userProfile.profileImage}
          name={userProfile.username}
          action={updateProfileImageAction}
          text="Update Profile Image"
        />
        <FormContainer action={updateProfile}>
          <div className="gap-4 mt-4">
            <FormInput
              name="firstName"
              label="firstname"
              defaultValue={userProfile.firstName}
              type="text"
            />
            <FormInput
              name="lastName"
              label="lastname"
              defaultValue={userProfile.lastName}
              type="text"
            />
            <FormInput
              name="username"
              defaultValue={userProfile.username}
              type="text"
            />
          </div>
          <SubmitButton text="Save changes" className="w-full mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default ProfilePage;
