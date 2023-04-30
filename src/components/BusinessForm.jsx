import { FormWrapper } from "./FormWrapper";

export function BusinessForm({
  businessName,
  businessAddress,
  businessDescription,
  updateFields,
}) {
  return (
    <form
      name="survey"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input name="bot-field" className="hidden" />

      <label htmlFor="business_name">Business/Brand Name</label>
      <input
        autoFocus
        name="business_name"
        required
        type="text"
        value={businessName}
        onChange={(e) => updateFields({ businessName: e.target.value })}
      />

      <label htmlFor="business_address">Business Address</label>
      <input
        required
        name="business_address"
        type="text"
        value={businessAddress}
        onChange={(e) => updateFields({ businessAddress: e.target.value })}
      />

      <label htmlFor="business_description">
        Briefly describe your business?
      </label>
      <textarea
        name="business_description"
        required
        type="text"
        value={businessDescription}
        onChange={(e) => updateFields({ businessDescription: e.target.value })}
      />
    </form>
  );
}
