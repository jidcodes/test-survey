import { useState } from "react";
import { ClientForm } from "@/components/ClientForm";
import { BusinessForm } from "@/components/BusinessForm";
import { HostingForm } from "@/components/HostingForm";
import { ProjectForm } from "@/components/ProjectForm";
import { useSurvey } from "@/hooks/useSurvey";

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

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log({ data });
  };

  return (
    <div className="main-form">
      <form
        name="survey"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success/"
        onSubmit={sendEmail}
      >
        <div className="block text-right">
          {currentStepIndex + 1} / {steps.length}
        </div>

        <input name="bot-field" className="hidden" />

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
            type="submit"
            className="font-medium px-4 py-1 border-2 border-black"
          >
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
