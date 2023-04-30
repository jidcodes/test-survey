import { FormWrapper } from "./FormWrapper";

export function ClientForm({ name, phone, email, updateFields }) {
  return (
    <FormWrapper title="Personal Details">
      <form
        name="survey"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="bot-field" className="hidden" />

        <label htmlFor="fullname">Full name</label>
        <input
          autoFocus
          name="fullname"
          required
          type="text"
          value={name}
          onChange={(e) => updateFields({ name: e.target.value })}
        />

        <label htmlFor="phone">Phone</label>
        <input
          required
          name="phone"
          type="number"
          value={phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          min={1}
          type="text"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </form>
    </FormWrapper>
  );
}
