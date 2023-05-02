import { FormWrapper } from "./FormWrapper";

export function ClientForm({ name, phone, email, updateFields }) {
  return (
    <FormWrapper title="Personal Details">
      <label htmlFor="fullname">Full name</label>
      <input
        autoFocus
        name="fullname"
        required
        type="text"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      />

      <label htmlFor="phone">Phone No.</label>
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

      <div className="flex gap-8 mt-8">
        <div className="flex gap-2">
          <input className="w-4" type="radio" />
          <label className="mb-2.5 font-bold" htmlFor="">
            Yes
          </label>
        </div>
        <div className="flex gap-2">
          <input className="w-4" type="radio" />
          <label className="mb-2.5 font-bold" htmlFor="">
            No
          </label>
        </div>
      </div>
    </FormWrapper>
  );
}
