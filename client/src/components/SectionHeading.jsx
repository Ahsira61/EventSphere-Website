import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  light = false
}) {

  return (

    <Reveal
      className={`section-heading ${
        light ? "light" : ""
      }`}
    >

      <span className="eyebrow">
        {eyebrow}
      </span>

      <h2>
        {title}
      </h2>

      {text && (
        <p>
          {text}
        </p>
      )}

    </Reveal>
  );
}