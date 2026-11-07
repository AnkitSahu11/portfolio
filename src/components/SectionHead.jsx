export default function SectionHead({ number, title, subtitle }) {
  return (
    <div className="section-head">
      <span className="section-number">{number}</span>

      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}