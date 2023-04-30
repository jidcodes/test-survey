import React from "react";

export function FormWrapper({ title, children }) {
  return (
    <>
      <h2 className="mb-4 font-bold text-xl text-center">{title}</h2>
      <div>{children}</div>
    </>
  );
}
