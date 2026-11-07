import SectionHead from '../components/SectionHead';
import { internships } from '../data/portfolio';
export default function Experience() {
  return (
    <section id="experience" className="section-block content-section">
      <SectionHead number="04" title="Experience" subtitle="Learning through structured programs and hands-on work." />
      <div className="timeline">{internships.map((internship) => (
        <article className="timeline-item" key={internship.company}>
          <div className="timeline-dot" /><div className="timeline-head"><div><h3>{internship.company}</h3><p className="role">{internship.role}</p></div><span className="date">{internship.date}</span></div>
          <ul>{internship.points.map((point) => <li key={point}>{point}</li>)}</ul>
        </article>
      ))}</div>
    </section>
  );
}
