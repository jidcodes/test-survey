import { FormWrapper } from "./FormWrapper";

export function ProjectForm({
  previousWebsite,
  socialMedia,
  referenceSite,
  updateFields,
}) {
  return (
    <FormWrapper title="Project Details">
      <form
        name="survey"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="bot-field" className="hidden" />

        <label htmlFor="previous_website">
          Do you have an existing website that you want redesigned? <br /> Enter
          url, if applicable.
        </label>
        <input
          type="text"
          name="previous_website"
          value={previousWebsite}
          onChange={(e) => updateFields({ previousWebsite: e.target.value })}
        />

        <label htmlFor="social_media_links">
          Add any social media links connected to your business
        </label>
        <textarea
          value={socialMedia}
          name="social_media_links"
          onChange={(e) => updateFields({ socialMedia: e.target.value })}
        />

        <label htmlFor="reference_website">
          Add a link to a reference site you like
        </label>
        <input
          type="text"
          name="reference_website"
          value={referenceSite}
          onChange={(e) => updateFields({ referenceSite: e.target.value })}
        />
      </form>
    </FormWrapper>
  );
}
