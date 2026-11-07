import SectionHead from '../components/SectionHead';
import { education } from '../data/portfolio';
export default function Education() {
  return (
    <section id="education" className="section-block content-section">
      <SectionHead number="05" title="Education" subtitle="My academic background." />
      <div className="education-list">{education.map((item) => (
        <article className="education-card" key={item.degree}><span className="date">{item.date}</span><h3>{item.degree}</h3><p>{item.institute}</p><span className="score">{item.score}</span></article>
      ))}</div>
    </section>
  );
}
