import { createProfileAction } from "@/app/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function CreateProfilePage() {
  const user = await currentUser();
  if (user?.privateMetadata?.hasProfile) redirect("/");
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        To use all available services, please complete your profile.
      </h1>
      <div className="border p-8 rounded-md max-w-lg">
        <FormContainer action={createProfileAction}>
          <div className="gap-4 mt-4">
            <FormInput name="firstName" label="firstname" type="text" />
            <FormInput name="lastName" label="lastname" type="text" />
            <FormInput name="username" type="text" />
          </div>
          <SubmitButton text="Submit" className="w-full mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProfilePage;
