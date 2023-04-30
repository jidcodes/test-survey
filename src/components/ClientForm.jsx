import { FormWrapper } from "./FormWrapper";

export function ClientForm({ name, phone, email, updateFields }) {
  return (
    <FormWrapper title="Personal Details">
      <label>Full name</label>
      <input
        autoFocus
        name="fullname"
        required
        type="text"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      />

      <label>Phone</label>
      <input
        required
        name="phone"
        type="number"
        value={phone}
        onChange={(e) => updateFields({ phone: e.target.value })}
      />

      <label>Email</label>
      <input
        name="email"
        min={1}
        type="text"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
    </FormWrapper>
  );
}
