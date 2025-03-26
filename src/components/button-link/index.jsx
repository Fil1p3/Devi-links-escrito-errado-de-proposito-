import "./styles.css";

export function ButtonLink({ name, link }) {
  return (
    <a href={link} target="_blank" className="button-link">
      {name}
    </a>
  );
}
