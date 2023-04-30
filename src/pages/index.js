import { useState } from "react";
import { ClientForm } from "@/components/ClientForm";
import { BusinessForm } from "@/components/BusinessForm";
import { HostingForm } from "@/components/HostingForm";
import { ProjectForm } from "@/components/ProjectForm";
import { useSurvey } from "@/hooks/useSurvey";
import { useRouter } from "next/router";

const INITIAL_DATA = {
  name: "",
  phone: "",
  email: "",

  businessName: "",
  businessAddress: "",
  businessDescription: "",

  previousWebsite: "",
  socialMedia: "",
  referenceSite: "",

  hostingDetails: "",
  hostingOffer: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useSurvey([
      <ClientForm {...data} updateFields={updateFields} />,
      <BusinessForm {...data} updateFields={updateFields} />,
      <ProjectForm {...data} updateFields={updateFields} />,
      <HostingForm {...data} updateFields={updateFields} />,
    ]);

  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log({ data });
    router.push({ pathname: "/success", query: data });
  };

  return (
    <main className="main-form">
      <div>
        <div className="block text-right">
          {currentStepIndex + 1} / {steps.length}
        </div>

        {step}

        <div
          className={
            isFirstStep
              ? "my-8 flex justify-end"
              : "my-8 flex justify-between items-center gap-6"
          }
        >
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              className="font-medium px-4 py-1 border-2 border-black"
            >
              Back
            </button>
          )}
          <button
            onClick={sendEmail}
            type="submit"
            className="font-medium px-4 py-1 border-2 border-black"
          >
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
