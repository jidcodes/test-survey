import { FormWrapper } from "./FormWrapper";

export function HostingForm({
  host,
  hostingDetails,
  hostingOffer,
  updateFields,
}) {
  return (
    <FormWrapper title="Hosting Information">
      <label htmlFor="hosting_details">
        Do you already have a registered domain and hosting?
      </label>
      <input
        autoFocus
        required
        type="text"
        name="hosting_details"
        value={hostingDetails}
        onChange={(e) => updateFields({ hostingDetails: e.target.value })}
      />

      <label htmlFor="hosting_offer">
        Do you want Us to manage your domain. hosting and site maintenance?
      </label>
      <input
        required
        type="text"
        name="hosting_offer"
        value={hostingOffer}
        onChange={(e) => updateFields({ hostingOffer: e.target.value })}
      />
    </FormWrapper>
  );
}
